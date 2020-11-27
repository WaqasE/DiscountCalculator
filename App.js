import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <TextInput
            placeholder="Original Price"
            style={{borderColor:'grey',borderWidth:1,width:'80%',height:40,marginBottom:10}}
          />
           <TextInput
            placeholder="Discount Percentage"
            style={{borderColor:'grey',borderWidth:1,width:'80%',height:40}}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

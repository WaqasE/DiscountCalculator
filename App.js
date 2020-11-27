import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount]  = useState('')
  return (
    <View style={styles.container}>
          <TextInput
            placeholder="Original Price"
            style={{borderColor:'grey',borderWidth:1,width:'80%',height:40,marginBottom:10}}
            onChangeText={(price)=>{setPrice(price)}}
            keyboardType="decimal-pad"
            value={price}
          />
           <TextInput
            placeholder="Discount Percentage"
            style={{borderColor:'grey',borderWidth:1,width:'80%',height:40}}
            onChangeText={(discount)=>{setDiscount(discount)}}
            keyboardType="decimal-pad"
            value={discount}
            maxLength={2}
          />
          {price && discount
          ?
              <>
                <Text>Final Price:{price - price*(discount/100)}</Text>
                <Text>You saved:{price*(discount/100)}</Text>
              </>
          :
            null
          }
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

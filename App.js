import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

export default function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount]  = useState('')
  return (
    <View style={styles.container}>
          <View style={styles.wrapper}>
          <Text style={styles.header}>Discount Calculator</Text>
              <TextInput
                placeholder="Original Price"
                onChangeText={(price)=>{setPrice(price)}}
                keyboardType="decimal-pad"
                value={price}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Discount Percentage"
                onChangeText={(discount)=>{setDiscount(discount)}}
                keyboardType="decimal-pad"
                value={discount}
                maxLength={2}
                style={styles.textInput}
              />
              {price && discount
              ?
                  <>
                    <Text style={styles.details}>Final Price:{price - price*(discount/100)}</Text>
                    <Text style={styles.details}>You saved:{price*(discount/100)}</Text>
                  </>
              :
                null
              }
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:'5%',
    backgroundColor:'#05C7F2'
  },
  wrapper:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',width:'100%',height:Dimensions.get('screen').height/2.5,
    paddingHorizontal:'5%',
    borderRadius:20
  },
  textInput:{
    borderColor:'grey',
    borderWidth:1,
    width:'100%',
    height:40,
    paddingHorizontal:20,
    marginVertical:5,
    borderRadius:5,
    fontSize:18
  },
  details:{
    marginVertical:5,
    fontSize:16
  },
  header:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
    marginVertical:20,
  }
});

import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    changeBgColor()
  }, [])


  const changeBgColor = () => {
    const codes = "0123456789abcdef";
    var colorCode = "#"
    for (var i = 0; i < 6; i++) {
      colorCode += codes.charAt(Math.floor(Math.random() * 16))
    }
    setBgColor(colorCode);
  }

  return (
    <SafeAreaView>

      <View style={{backgroundColor: bgColor , height: '100%' , justifyContent:'center' , gap: 100 , flexDirection: 'column-reverse'}}>
        <TouchableOpacity
          onPress={changeBgColor}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Change bgColor</Text>
          </View>

        </TouchableOpacity>
        
          <View style={styles.card}>
            <Text style={styles.description}>Long Press to Copy Color Code </Text>
            <Text selectable style={styles.colorCode}>{bgColor}</Text>
          </View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#9fa8da',
    width: '40%',
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'pink',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 8
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#303f9f'
  },
  card: {
    width: '75%',
    backgroundColor: '#e1bee7',
    padding: 20,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'pink',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  description: {
    color: '#9c27b0',
    fontSize: 18
  },
  colorCode: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7b1fa2'
  } 
})
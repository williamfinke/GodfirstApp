import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonWhiteBig(props) {
  return (
    <View>
     <TouchableOpacity
      style={styles.container}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E5E5E5',
        height: 70,
        width: 148,
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text:{
      fontSize: 20,
      fontWeight: 700,
    },
})
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonWhite(props) {
  return (
    <View>
     <TouchableOpacity
      style={styles.container}
    >
      <Text style={{ color: 'black' }}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#E5E5E5',
        height: 50,
        width: 114,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})
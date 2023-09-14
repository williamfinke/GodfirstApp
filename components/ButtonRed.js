import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonRed(props) {
  return (
    <View>
     <TouchableOpacity
      style={styles.container}
    >
      <Text style={{ color: 'white' }}>{props.text}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CB0B12',
        height: 50,
        width: 114,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})
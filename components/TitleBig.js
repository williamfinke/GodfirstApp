import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleBig(props) {
  return (
    <View>
      <Text style={styles.Text1}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Text1:{
        fontSize: 34,
        fontWeight: 800,
        marginLeft: 15,
        letterSpacing: 2,
    },
})
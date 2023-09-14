import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleSmall(props) {
  return (
    <View>
      <Text style={styles.Text1}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Text1:{
        fontSize: 22,
        fontWeight: 700,
        marginLeft: 15,
        marginTop: 5,
    },
})
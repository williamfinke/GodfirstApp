import { TouchableOpacity, StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ButtonRedBig(props) {
  return (
    <View>
     <View
      style={styles.container}
    >
      <Text style={styles.text}>{props.text}</Text>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CB0B12',
        height: 70,
        width: 148,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 15,
    },
    text:{
      fontSize: 20,
      fontWeight: 700,
      color: 'white',

    },
})
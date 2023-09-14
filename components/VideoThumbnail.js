import { TouchableOpacity, StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native'
import React from 'react'

export default function VideoThumbnail(props) {
  return (
  
    <View style={styles.container3}>
    <View style={styles.container2} >
    <ImageBackground
      style={styles.image}
      source={require('../assets/images/500x500.jpg')} 
    />
   
    </View >
    <Text style={styles.text1}>Title van album</Text>
    
     <View style={styles.container4}>
     <Text style={styles.text2}>onder title informatie</Text>
     <Text style={styles.text3}>4523 keer bekeken</Text>
     </View>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {

  },
  container2: {
    marginTop: 10,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
container3:{
  marginLeft: 15,
},

container4:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginRight: 15,
},
  image: {
    height: 200,
    width: '100%',
  },

  text1: {
    fontSize: 17,
    fontWeight: 600,

    letterSpacing: 1,
  },
  text2: {
    fontSize: 12,
    fontWeight: 200,
  },
  text3: {
    fontSize: 12,
    fontWeight: 200,
  },
})
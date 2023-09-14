import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function BottomPlayer() {
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/500x500.jpg')}
            style={styles.image}
          />
        </View>
        <Text>hoi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 90,
    width: '100%',
    backgroundColor: '#E5E5E5',
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 10,
  },
  imageContainer: {
    height: 56,
    width: 56,
  },
  player: {
    height: 77,
  },
});
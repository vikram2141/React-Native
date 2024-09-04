// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // Replace 'Home' with the correct screen name, 'Main' in this case
      navigation.replace('Main'); 
    }, 2000); // Delay for 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash_image.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;

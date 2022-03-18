import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = () => (
  <SafeAreaView style={[styles.container]}>
    {/* <Text>Checking a few things!</Text> */}
    <ActivityIndicator size="large" color="#0000ff" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default SplashScreen;

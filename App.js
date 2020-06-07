import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/logo.png')} style={styles.logo}/>
      <Text>IBS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51B6F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
  },
  sub_headline: {
    flex:1
  }
});

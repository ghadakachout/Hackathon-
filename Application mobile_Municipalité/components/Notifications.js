import * as React from 'react';
import { View, Text,Button,ImageBackground } from 'react-native';

const image = require('../assets/background.png')
export default function Notifications({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1,justifyContent: "center"  }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{		fontWeight: 'bold',fontSize: 15}}> لا يوجد اشعارات !</Text>
    </View>
    </ImageBackground>
  );
}

 
import * as React from 'react';
import { View, Text,Button } from 'react-native';

export default function Choose() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="شخص عادي"></Button>
      <Button title="شخص معنوي"></Button>
    </View>
  );
}
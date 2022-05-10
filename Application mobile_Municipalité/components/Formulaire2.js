import * as React from 'react';
import { View, Text,TextInput,StyleSheet } from 'react-native';

export default function Formulaire1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textStyle}>الشخص المعنوي</Text>
        <TextInput style={styles.input} placeholder={'التسمية الاجتماعية'} />
        <TextInput style={styles.input} placeholder={'المقر الاجتماعي'}/>
         <TextInput style={styles.input} placeholder={'المحتوى'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width:180,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  textStyle: {
    color: '#448830',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30
  },
});
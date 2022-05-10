import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,TouchableHighlight
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    }
  }
  logIn = () => {
  }
  render() {
    return (
      <View style={styles.cantainer}>
        <Text style={styles.headerTxt}>مرحبا بك</Text>
        <View style={styles.subView}>
          <Text style={styles.subTxt}>التسجيل</Text>
          <TextInput style={styles.nameInput} placeholder="البريد الالكتروني" onChangeText={(email => { this.setState({ email }) })} />
          <TextInput style={styles.nameInput} placeholder="كلمة السر" onChangeText={(pass => { this.setState({ pass }) })} />
          <TouchableOpacity style={styles.btn} onPress={()=>{this.props.setModalVisible(!this.props.modalVisible)}}>
            <Text style={styles.btnTxt}>سجل</Text>
          </TouchableOpacity>
          <View style={styles.endView}>
            <Text style={styles.loginTxt}>انشئ حساب ؟</Text>
            <Text style={styles.loginTxt}>اشتراك</Text>
          </View>
          <TouchableHighlight
              onPress={() => {
                this.props.setModalVisible(!this.props.modalVisible)}
              }>
          <View style={{alignItems:'center'}}>
                <Text style={styles.endTxt1}>رجوع</Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cantainer: {
    backgroundColor: '#6C62FF',
    height: 700,
    margin:0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width:350
  },
  subView: {
    backgroundColor: 'white',
    height: 430,
    marginTop: 200,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  headerTxt: {
    fontSize: 40,
    margin: 0,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    marginTop: 100,
    marginLeft: 99,

  },
  subTxt: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 130,
  },
  nameInput: {
    height: 40,
    width: 270,
    marginLeft: 40,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  btn: {
    height: 50,
    width: 200,
    backgroundColor: '#6C62FF',
    borderRadius: 80,
    borderWidth: 2,
    marginLeft: 70,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:35
  },
  endTxt: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  endTxt1: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  endBtn: {
    marginRight: 80,
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
  },
});
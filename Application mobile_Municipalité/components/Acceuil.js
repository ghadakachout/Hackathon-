import React,{useState} from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableHighlight,Modal,Alert } from "react-native";
import Login from './Login'
import Ionicons from 'react-native-vector-icons/Ionicons';

const image = require('../assets/acceuil.png')

export default function Acceuil() {
  const [modalVisible, setModalVisible] = useState(false);

  return(
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
      <View style={styles.screenContainer}>
          <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={{color:'white',fontWeight: 'bold',textAlign: 'center',fontSize: 27,bottom:18}}>اعمل Compte</Text> 
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Login modalVisible={true} setModalVisible={setModalVisible}/>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{ alignItems:'flex-end'}}>
      <Ionicons name='information-circle-outline' onPress={()=>{Alert.alert('معلومات','لمحة حول منطقة العالية :\nتقع العالية في سفح جبل حكيمة بين عدة قرى أندلسية أخرى كغار الملح وعوسجة والماتلين و رأس الجبل ومنزل الجميل وبنزرت. فهي تنتصب على منحدر صخري فهي بالتالي تتمتع بموقع حصين وهي تشرف على كامل السهول والبساتين المحيطة بها.\nالعالية مدينة تونسية تقع في شمال البلاد تنتمي إداريا إلى ولاية بنزرت تبعد العالية 16 كم عن مدينة  و40 كم عن العاصمة تونس.\n\nلمحة حول النفاذ الى المعلومة :\nفي إطار تكريس مبدأي الشّفافية و المساءلة ومن أجل ضمان تحسين جودة المرافق العمومية ودعم مشاركة العموم في وضع السياسات العمومية  ومتابعة تنفيذها وتقييمها بما من شأنه أن يؤسس لعلاقة ثقة بين الهياكل الخاضعة لأحكام القانون والأشخاص الطبيعيين والمعنويين ومنظمات المجتمع المدني .\nأقر الدستور التونسي صلب فصله 32 الحق في النّفاذ الى المعلومة كحق دستوري وجعل الدّولة الضّامنة لممارسة هذا الحق.\nوقد تولّى القانون الأساسي عدد 22 لسنة 2016 المؤرّخ في 24 مارس 2016  إبراز كيفية ممارسة هذا الحق واجراءاته.')}} backgroundColor='white' color='black' size={35}/>
      </View>
    </ImageBackground>
  </View>
  
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "white"
  },
  screenContainer: {
    flex: 1,
    padding: 80,
    paddingTop:520,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    margin:0,
    flex: 1,
    bottom:0,
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    height:630,
    borderRadius: 20,
    padding: 80,
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  openButton: {
    backgroundColor: '#6C62FF',
    padding: 20,
    margin:0,
  width:220, 
  height:30,
  borderRadius: 20,
  padding: 25,
  margin:5, },
});




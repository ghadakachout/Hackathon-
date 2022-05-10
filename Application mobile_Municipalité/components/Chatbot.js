import ChatBot from 'react-native-chatbot';
import React from 'react';


const steps = [
  {
    id: '0',
    message: 'مرحبا! البلدية فاش تنجم تعاونك',
    trigger: '1',
  },

  {
    id: '1',
    options:[
      {label:'معلومات عن مدينة العالية',value:'a', trigger:'2'},
      {label:'الحوكمة المحلية',value:'b', trigger:'3'},
      {label:'الخدمات الالكترونية',value:'c', trigger:'4'},
      {label:'الصفقات والبتات',value:'e', trigger:'5'},
      {label:'الخدمات',value:'f', trigger:'6'},
    ] 
  },
  {
    id: '2',
    options:[
      {label:'تقديم المدينة',value:'g'},
      {label:'بلدية العالية',value:'h'},
    ] 
  },

  {
    id: '3',
    options:[
      {label:'المالية',value:'w'},
      {label:'اعمال المجلس البلدي',value:'x'},
      {label:'الشاريع و الانجازات',value:'v'},
      {label:'الميزانية التشاركية',value:'n'},
    ] 
  },
  {
    id: '4',
    options:[
      {label:' رخص البناء و الربط بالشبكات العمومية',value:'1'},
      {label:'متابعة الجباية المحلية',value:'2'},
      {label:'متابعة استخلاص الفواتير',value:'3'},
      {label:'مطبوعات للتحميل',value:'4'},
      {label:'العرائض و الشكاوي',value:'5'},
      {label:'النفاذ الى المعلومة',value:'7'},
    ] 
  },
  {
    id: '5',
    options:[
      {label:'قائمة الصفقات العمومية',value:'r'},
      {label:'العروض',value:'t'},
      {label:'نتائج فرز العروض',value:'i'},
      {label:'تقرير حول تقييم تقدم المشاريع العمومية',value:'o'},
      {label:'البتات',value:'p'},
      {label:'الاستشارات',value:'m'},
    ] 
  },
  {
    id: '6',
    options:[
      {label:'خدمات الحالة المدنية',value:'j'},
      {label:'الخدمات الادارية العمرانية',value:'ee'},
      {label:'خدمات ادارية',value:'ff'},
      {label:'خدمات الشؤون الاقتصادية',value:'gg'},
      {label:'خدمات الاداءات',value:'gl'},
      {label:'الانشطة التجارية و الحرفية الخاضعة لاحكام كراس الشروط',value:'mm'},
    ] 
  },
];
export default function Chatbot() {
  return(
    <ChatBot botBubbleColor="#448830" optionBubbleColor="#448830" steps={steps} />
  )}

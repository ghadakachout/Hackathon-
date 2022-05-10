import Notifications from './Notifications'
import Services from './Services'
import Acceuil from './Acceuil'
import Actualities from './Actualities'
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        // ios-information-circle

        if (route.name === 'Acceuil') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === 'Actualities') {
          iconName = focused ? 'ios-list' : 'ios-list';
        }
        else if (route.name === 'Services') {
          iconName = focused ? 'document-outline' : 'document-outline';
        }
        else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Acceuil" options={{headerShown: false,title:"الصفحة الرئيسية"}} component={Acceuil}/>
      <Tab.Screen name="Actualities" options={{headerShown: false,title:"الاخبار"}} component={Actualities} />
      <Tab.Screen name="Services" options={{headerShown: false,title:"الخدمات"}} component={Services} />
      <Tab.Screen name="Notifications" options={{headerShown: false,tabBarBadge: 0,title:"الإشعارات"}} component={Notifications}/>
    </Tab.Navigator>
  );
}
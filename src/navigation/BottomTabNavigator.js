// src/navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { Image, Text, View } from 'react-native';


// function HomeScreen(){
//   require(
//     <View >
//       <Text>Home</Text>
//     </View>
//   )
// }
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#000',
        tabBarIcon: ({ focused, color,size  }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? require('../assets/home.png'): ('../assets/home.png');
          } else if (route.name === 'SearchScreen') {
            iconName = focused ? require('../assets/search.png') :('../assets/search.png') ;
          }

          return <Image source={iconName} style={{width:20, height: 20}}
          resizeMethod='contain'/>;
        },
      })}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'Home' }} 
                style={{width:20,height:20 
                }}

      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
        options={{ title: 'Search' }} 
        style={{width:15,height:15}}
        
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Maison',
            tabBarIcon: ({focused}) =>
              focused ? (
                <FontAwesomeIcon icon={faHome} color="red" size={20} />
              ) : (
                <FontAwesomeIcon icon={faHome} color="blue" size={20} />
              ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Coucou"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Coucou',
            tabBarIcon: ({focused}) =>
              focused ? (
                <FontAwesomeIcon icon={faHome} color="red" size={20} />
              ) : (
                <FontAwesomeIcon icon={faHome} color="blue" size={20} />
              ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

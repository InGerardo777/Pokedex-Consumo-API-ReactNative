import React from 'react';
import { Alert, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//screens
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import FriendScreen from '../screens/Friends/FriendsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#282424',
      }}
    >
      <Tab.Screen
        name='Friend'
        component={FriendScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size = 30 }) => (
            <MaterialCommunityIcons
              name='card-account-details-star-outline'
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerStyle: {
            height: 80,
            backgroundColor: '#CACACA',
          },
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='account-multiple'
              size={size}
              color={color}
            />
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <MaterialCommunityIcons
                name='bell-badge-outline'
                size={35}
                color='black'
                onPress={() => Alert.alert('Simple Button')}
              />
            </View>
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <MaterialCommunityIcons
                name='menu'
                size={35}
                onPress={() => Alert.alert('Simple Button')}
              />
            </View>
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size = 30 }) => (
            <MaterialCommunityIcons name='account' size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

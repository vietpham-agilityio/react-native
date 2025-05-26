import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import {
  HomeScreen,
  CartScreen,
  CategoryScreen,
  ProfileScreen,
} from '@/screens';

// Icon
import Icon from 'react-native-vector-icons/Foundation';

// Theme
import { colors } from '@/theme';

// Routes
import { ROUTES } from '@/constants/route';

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, string> = {
  Home: 'home',
  Category: 'list-thumbnails',
  Cart: 'shopping-cart',
  Profile: 'torso',
};

const BottomTabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      animation: 'shift',
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.gray,
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        height: 70,
        paddingBottom: 8,
        paddingTop: 4,
        paddingHorizontal: 24,
      },
      tabBarIcon: ({ color }) => {
        return <Icon name={TAB_ICONS[route.name]} size={24} color={color} />;
      },
    })}>
    <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Tab.Screen name={ROUTES.CATEGORY} component={CategoryScreen} />
    <Tab.Screen name={ROUTES.CART} component={CartScreen} />
    <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomTabNavigation;

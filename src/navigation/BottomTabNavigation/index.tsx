import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import {
  HomeScreen,
  CartScreen,
  CategoryScreen,
  ProfileScreen,
} from '@/screens';

// Theme
import { colors } from '@/theme';

// Routes
import { ROUTES } from '@/constants/route';

// Icons
import { HomeIcon, CategoryIcon, CartIcon, ProfileIcon } from '@/icons';

const Tab = createBottomTabNavigator();

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
        height: 80,
        paddingBottom: 8,
        paddingTop: 4,
        paddingHorizontal: 24,
      },
      tabBarIcon: ({ color }) => {
        switch (route.name) {
          case ROUTES.HOME:
            return <HomeIcon color={color} />;
          case ROUTES.CATEGORY:
            return <CategoryIcon color={color} />;
          case ROUTES.CART:
            return <CartIcon color={color} />;
          case ROUTES.PROFILE:
            return <ProfileIcon color={color} />;
        }
      },
    })}>
    <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Tab.Screen name={ROUTES.CATEGORY} component={CategoryScreen} />
    <Tab.Screen name={ROUTES.CART} component={CartScreen} />
    <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
);

export default BottomTabNavigation;

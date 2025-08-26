import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import {
  HomeScreen,
  CartScreen,
  CategoryScreen,
  ProfileScreen,
} from '@/screens';

// Components
import { NotificationHeaderButton, SearchHeaderButton } from '@/components';

// Theme
import { colors } from '@/theme';

// Routes
import { ROUTES } from '@/constants/route';

// Icons
import { HomeIcon, CategoryIcon, CartIcon, ProfileIcon } from '@/icons';
import { RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const NotificationHeaderIcon = useCallback(
    () => <NotificationHeaderButton />,
    [],
  );
  const SearchHeaderIcon = useCallback(() => <SearchHeaderButton />, []);

  const renderTabBarIcon = useCallback(
    ({
      color,
      route,
    }: {
      color: string;
      route: RouteProp<Record<string, object | undefined>, string>;
    }) => {
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
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerLeft: SearchHeaderIcon,
        headerRight: NotificationHeaderIcon,
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
        tabBarIcon: ({ color }) => renderTabBarIcon({ color, route }),
      })}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.CATEGORY} component={CategoryScreen} />
      <Tab.Screen
        name={ROUTES.CART}
        options={{
          headerTitle: 'My Cart',
          headerLeft: () => null,
          headerRight: () => null,
        }}
        component={CartScreen}
      />
      <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

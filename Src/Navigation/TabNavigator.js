import { CustomTabBar } from '@/Components';
import { NAVIGATION } from '@/Constants';
import { Analytics, Campaign, CreateContent, Home, Menu } from '@/Screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name={NAVIGATION.home} component={Home} />
      <Tab.Screen name={NAVIGATION.analytics} component={Analytics} />
      <Tab.Screen name={NAVIGATION.createContent} component={CreateContent} />
      <Tab.Screen name={NAVIGATION.campaign} component={Campaign} />
      <Tab.Screen name={NAVIGATION.menu} component={Menu} />
    </Tab.Navigator>
  );
}

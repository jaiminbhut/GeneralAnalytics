import { NAVIGATION } from '@/Constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TabNavigator } from './TabNavigator';

const RootStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName={NAVIGATION.homeTab}>
      <RootStack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.homeTab}
        component={TabNavigator}
      />
    </RootStack.Navigator>
  );
}

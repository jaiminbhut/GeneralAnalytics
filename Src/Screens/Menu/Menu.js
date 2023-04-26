import { Layout } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import useMenu from './hook/useMenu';

export function Menu() {
  const colors = useTheme().colors;
  const {} = useMenu(colors);

  return <View style={Layout.fill} />;
}

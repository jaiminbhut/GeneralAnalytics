import { Layout } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import useCreateContent from './hook/useCreateContent';

export function CreateContent() {
  const colors = useTheme().colors;
  const {} = useCreateContent(colors);

  return <View style={Layout.fill} />;
}

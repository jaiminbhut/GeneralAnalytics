import { Layout } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import useAnalytics from './hook/useAnalytics';

export function Analytics() {
  const colors = useTheme().colors;
  const {} = useAnalytics(colors);

  return <View style={Layout.fill} />;
}

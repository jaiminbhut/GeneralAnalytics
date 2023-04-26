import { Layout } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import useCampaign from './hook/useCampaign';

export function Campaign() {
  const colors = useTheme().colors;
  const {} = useCampaign(colors);

  return <View style={Layout.fill} />;
}

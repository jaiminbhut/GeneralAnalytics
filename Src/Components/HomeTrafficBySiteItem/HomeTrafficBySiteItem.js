import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import getStyles from './HomeTrafficBySiteItem.styles';

export function HomeTrafficBySiteItem({ item }) {
  const colors = useTheme().colors;
  const styles = getStyles(colors);

  return (
    <View style={[styles.container]}>
      <View style={styles.stateIconContainer}>{item.siteIcon}</View>
      <Text style={[styles.textValue]}>{item.value}</Text>
      <Text style={[styles.textName]}>{item.name}</Text>
    </View>
  );
}

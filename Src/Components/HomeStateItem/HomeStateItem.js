import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import getStyles from './HomeStateItem.styles';

export function HomeStateItem({ item }) {
  const colors = useTheme().colors;
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, { backgroundColor: item.background }]}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={[item.gradient1, item.gradient2]}
        style={styles.stateIconContainer}>
        {item.icon}
      </LinearGradient>
      <Text style={[styles.textValue, { color: item.textColor }]}>
        {item.value}
      </Text>
      <Text style={[styles.textName, { color: item.textColor }]}>
        {item.name}
      </Text>
    </View>
  );
}

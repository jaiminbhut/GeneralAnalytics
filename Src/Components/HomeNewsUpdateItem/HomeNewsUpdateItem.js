import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import getStyles from './HomeNewsUpdateItem.styles';

export function HomeNewsUpdateItem({ item }) {
  const colors = useTheme().colors;
  const styles = getStyles(colors);

  return (
    <View style={[styles.container]}>
      <Image source={item.image} style={styles.imageNews} />
      <View style={styles.viewNameDescription}>
        <Text style={[styles.textName]} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={[styles.textDescription]} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

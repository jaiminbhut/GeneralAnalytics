import { Layout } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import getStyles from './HomeOrderTimelineItem.styles';

export function HomeOrderTimelineItem({ item, showLine }) {
  const colors = useTheme().colors;
  const styles = getStyles(colors);

  return (
    <View style={[styles.container]}>
      <View style={Layout.alignItemsCenter}>
        <View style={[styles.viewDot, { backgroundColor: item.color }]} />
        {showLine && <View style={styles.line} />}
      </View>
      <View style={styles.viewNameDescription}>
        <Text style={[styles.textName]} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={[styles.textDescription]} numberOfLines={1}>
          {moment(item.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
}

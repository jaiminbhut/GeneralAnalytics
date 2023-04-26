import Box from '@/Assets/Icons/box.svg';
import Checkbox from '@/Assets/Icons/checkbox.svg';
import { ms } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import getStyles from './HomeTasksItem.styles';

export function HomeTasksItem({ item, onPress }) {
  const colors = useTheme().colors;
  const styles = getStyles(colors);

  return (
    <Pressable style={[styles.container]} onPress={onPress}>
      <View>
        {item.isCompleted ? (
          <Checkbox height={ms(24)} width={ms(24)} />
        ) : (
          <Box height={ms(24)} width={ms(24)} />
        )}
      </View>
      <View style={styles.viewNameDescription}>
        <Text
          style={[styles.textName, item.isCompleted && styles.textCompleted]}
          numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
}

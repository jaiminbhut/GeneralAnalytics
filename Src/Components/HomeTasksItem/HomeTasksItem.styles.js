import { Layout, Typography, hs, vs } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    container: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
      marginVertical: vs(12),
    },
    textName: {
      ...Typography._14Regular,
      color: colors.text,
    },
    textCompleted: {
      color: colors.disable,
      textDecorationLine: 'line-through',
    },
    viewNameDescription: {
      flex: 1,
      marginHorizontal: hs(16),
    },
  });

export default styles;

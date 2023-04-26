import { Layout, Typography, hs, ms, vs } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    container: {
      ...Layout.alignItemsCenter,
      ...Layout.row,
      marginVertical: vs(12),
    },
    textName: {
      ...Typography._14Medium,
      color: colors.text,
    },
    textDescription: { ...Typography._14Regular, color: colors.gray },
    imageNews: {
      height: ms(48),
      width: ms(48),
      borderRadius: ms(8),
      resizeMode: 'contain',
    },
    viewNameDescription: {
      flex: 1,
      marginHorizontal: hs(16),
    },
  });

export default styles;

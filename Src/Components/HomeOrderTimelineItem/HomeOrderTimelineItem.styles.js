import { Layout, Typography, hs, ms, vs } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    container: {
      ...Layout.row,
      marginTop: vs(4),
    },
    textName: {
      ...Typography._14Medium,
      color: colors.text,
    },
    textDescription: {
      ...Typography._12Regular,
      color: colors.gray,
      marginTop: vs(4),
    },
    viewDot: {
      height: ms(12),
      width: ms(12),
      borderRadius: ms(6),
      marginTop: vs(6),
      resizeMode: 'contain',
    },
    viewNameDescription: {
      flex: 1,
      marginHorizontal: hs(16),
    },
    line: {
      height: vs(36),
      width: hs(1),
      marginTop: vs(10),
      backgroundColor: colors.divider,
    },
  });

export default styles;

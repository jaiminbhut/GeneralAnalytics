import { Layout, Typography, ms, vs } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    container: {
      height: vs(64),
      paddingTop: vs(12),
      ...Layout.row,
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentAround,
      backgroundColor: colors.black,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: vs(10),
      zIndex: vs(14),
    },
    iconBox: {
      height: ms(24),
      width: ms(24),
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentCenter,
    },
    textTabLabel: {
      ...Typography._8Regular,
      color: colors.gray,
      textTransform: 'capitalize',
      marginTop: vs(6),
    },
    textFocusedLabel: {
      color: colors.blue,
    },
  });

export default styles;

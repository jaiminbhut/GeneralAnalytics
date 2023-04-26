import { Layout, Typography, hs, ms, vs, width } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    container: {
      borderRadius: ms(8),
      width: width / 2 - hs(52),
      borderWidth: ms(1),
      borderColor: colors.divider,
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentCenter,
      padding: ms(16),
      marginVertical: ms(8),
    },
    textName: {
      ...Typography._14Regular,
      marginTop: vs(4),
      color: colors.gray,
    },
    textValue: { ...Typography._18Bold, color: colors.text, marginTop: vs(8) },
    stateIconContainer: {
      height: ms(32),
      width: ms(32),
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentCenter,
    },
  });

export default styles;

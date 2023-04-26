import { Layout, Typography, hs, ms, vs } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    container: {
      borderRadius: ms(16),
      marginHorizontal: hs(20),
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentCenter,
      paddingVertical: vs(40),
      paddingHorizontal: hs(20),
      marginVertical: vs(12),
    },
    textName: {
      ...Typography._14Medium,
      marginTop: vs(4),
    },
    textValue: { ...Typography._24Bold, marginTop: vs(24) },
    stateIconContainer: {
      height: ms(64),
      width: ms(64),
      borderRadius: ms(32),
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentCenter,
    },
  });

export default styles;

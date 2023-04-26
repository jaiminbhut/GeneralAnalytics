import { Layout, Typography, hs, ms, vs } from '@/Theme';
import { StyleSheet } from 'react-native';

const styles = (colors) =>
  StyleSheet.create({
    header: {
      paddingVertical: vs(14),
      backgroundColor: colors.lightBackground,
      ...Layout.alignItemsCenter,
      marginBottom: vs(24),
    },
    textWelcome: {
      ...Typography._20Bold,
      color: colors.text,
      marginHorizontal: hs(20),
    },
    statsContainer: {
      marginTop: vs(12),
    },
    bezierLineChartContainer: {
      paddingVertical: vs(24),
      marginHorizontal: hs(20),
      borderRadius: ms(16),
      marginTop: vs(24),
      backgroundColor: colors.background,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.84,
      elevation: vs(5),
      zIndex: vs(14),
    },
    viewNewsList: {
      marginTop: vs(12),
      paddingStart: hs(24),
    },
    viewTrafficBySite: {
      marginTop: vs(12),
      paddingHorizontal: hs(24),
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    viewSection: {
      paddingVertical: vs(24),
      marginHorizontal: hs(20),
      borderRadius: ms(16),
      marginTop: vs(24),
      backgroundColor: colors.background,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.84,
      elevation: vs(5),
      zIndex: vs(14),
    },
    textSectionHeader: {
      paddingStart: hs(24),
      ...Typography._18Bold,
      color: colors.text,
    },
    viewAllContainer: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentEnd,
      marginEnd: hs(24),
    },
    textViewAll: {
      ...Typography._12Medium,
      color: colors.text,
    },
    divider: {
      height: vs(1),
      backgroundColor: colors.divider,
      marginBottom: vs(20),
      marginTop: vs(10),
    },
    viewAnalyticsIcon: {
      marginTop: vs(24),
      ...Layout.selfCenter,
      marginBottom: vs(80),
    },
    scroll: {
      height: vs(6),
      width: hs(64),
      borderRadius: ms(12),
      marginTop: vs(8),
      backgroundColor: colors.gray,
      alignSelf: 'center',
    },
    pieChartList: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
      ...Layout.justifyContentBetween,
      marginHorizontal: hs(15),
    },
    visitItemColor: {
      height: ms(12),
      width: ms(12),
      borderRadius: ms(6),
      resizeMode: 'contain',
    },
    visitItem: {
      ...Layout.row,
      ...Layout.alignItemsCenter,
    },
    textVisit: {
      ...Typography._12Regular,
      color: colors.text,
      marginStart: hs(6),
    },
    viewWebsiteChart: {
      marginTop: vs(24),
      marginHorizontal: hs(15),
    },
    textGain: {
      ...Typography._14Regular,
      color: colors.gray,
      paddingStart: hs(24),
      marginTop: vs(4),
    },
  });

export default styles;

import Analytics from '@/Assets/Icons/analytics.svg';
import ArrowRight from '@/Assets/Icons/arrow_right.svg';
import Search from '@/Assets/Icons/search.svg';
import {
  HomeNewsUpdateItem,
  HomeOrderTimelineItem,
  HomeStateItem,
  HomeTasksItem,
  HomeTrafficBySiteItem,
} from '@/Components';
import { strings } from '@/Localization';
import { HomeData } from '@/Mocks';
import { Layout, hs, ms, vs, width } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import getStyles from './Home.styles';
import useHome from './hook/useHome';

const Header = ({ styles }) => {
  return (
    <View style={styles.header}>
      <Search height={ms(24)} width={ms(24)} />
    </View>
  );
};

const States = ({ styles }) => {
  return (
    <View style={styles.statsContainer}>
      {HomeData.stats.map((item, index) => {
        return <HomeStateItem key={index} item={item} />;
      })}
    </View>
  );
};

const WebsiteVisitsChart = ({ styles, bezier, chartConfig }) => {
  return (
    <View style={styles.bezierLineChartContainer}>
      <SectionHeader styles={styles} header={strings.websiteVisits} />
      <Text style={styles.textGain}>{'(+43%) than last year'}</Text>
      <View style={styles.viewWebsiteChart}>
        <LineChart
          data={bezier}
          width={width - hs(80)}
          height={vs(256)}
          withDots={false}
          withInnerLines={false}
          verticalLabelRotation={30}
          withShadow={false}
          chartConfig={chartConfig}
          bezier
        />
      </View>
    </View>
  );
};

const CurrentVisitsView = ({ styles, pieChartData, chartConfig }) => {
  return (
    <View style={styles.bezierLineChartContainer}>
      <SectionHeader styles={styles} header={strings.currentVisits} />
      <View style={styles.viewWebsiteChart}>
        <PieChart
          data={pieChartData}
          width={width - hs(60)}
          hasLegend={false}
          height={vs(256)}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          absolute
          center={[hs(70), 0]}
        />
      </View>
      <View>
        <View style={styles.divider} />
        <View style={styles.pieChartList}>
          {pieChartData.map((item, index) => {
            return (
              <VisitsItem
                key={index}
                styles={styles}
                color={item.color}
                title={item.name}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const VisitsItem = ({ styles, color, title }) => {
  return (
    <View style={styles.visitItem}>
      <View
        style={[
          styles.visitItemColor,
          {
            backgroundColor: color,
          },
        ]}
      />
      <Text style={styles.textVisit}>{title}</Text>
    </View>
  );
};

const SectionHeader = ({ styles, header }) => {
  return (
    <View>
      <Text style={styles.textSectionHeader}>{header}</Text>
    </View>
  );
};

const NewsUpdatesView = ({ styles }) => {
  return (
    <View style={styles.viewSection}>
      <SectionHeader styles={styles} header={strings.newsUpdate} />
      <View style={styles.viewNewsList}>
        {HomeData.newsUpdates.map((item, index) => {
          return <HomeNewsUpdateItem key={index} item={item} />;
        })}
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            //TODO
          }}
          style={styles.scroll}
        />
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.viewAllContainer}
          onPress={() => {
            //TODO
          }}>
          <Text style={styles.textViewAll}>{strings.viewAll}</Text>
          <ArrowRight height={vs(20)} width={hs(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OrderTimelineView = ({ styles }) => {
  return (
    <View style={styles.viewSection}>
      <SectionHeader styles={styles} header={strings.orderTimeline} />
      <View style={styles.viewNewsList}>
        {HomeData.orderTimeline.map((item, index) => {
          return (
            <HomeOrderTimelineItem
              key={index}
              item={item}
              showLine={index !== HomeData.orderTimeline.length - 1}
            />
          );
        })}
      </View>
    </View>
  );
};

const TrafficBySiteView = ({ styles }) => {
  return (
    <View style={styles.viewSection}>
      <SectionHeader styles={styles} header={strings.trafficBySite} />
      <View style={styles.viewTrafficBySite}>
        {HomeData.trafficBySite.map((item, index) => {
          return <HomeTrafficBySiteItem key={index} item={item} />;
        })}
      </View>
    </View>
  );
};

const TasksView = ({ styles, tasks, setTasks }) => {
  return (
    <View style={styles.viewSection}>
      <SectionHeader styles={styles} header={strings.tasks} />
      <View style={styles.viewNewsList}>
        {tasks.map((item, index) => {
          return (
            <HomeTasksItem
              key={index}
              item={item}
              onPress={() => handleTaskCompleteAction(index, tasks, setTasks)}
            />
          );
        })}
      </View>
    </View>
  );
};

function handleTaskCompleteAction(index, tasks, setTasks) {
  const allTasks = [...tasks];
  allTasks[index].isCompleted = !allTasks[index].isCompleted;
  setTasks([...tasks]);
}

const AnalyticsIcon = ({ styles }) => {
  return (
    <View style={styles.viewAnalyticsIcon}>
      <Analytics height={ms(24)} width={ms(24)} />
    </View>
  );
};

export function Home() {
  const colors = useTheme().colors;
  const { getter, setter } = useHome(colors);
  const styles = getStyles(colors);

  return (
    <ScrollView>
      <View style={Layout.fill}>
        <Header styles={styles} />
        <Text style={styles.textWelcome}>{strings.hiWelcomeBack}</Text>
        <States styles={styles} />
        <WebsiteVisitsChart styles={styles} colors={colors} {...getter} />
        <CurrentVisitsView styles={styles} colors={colors} {...getter} />
        <NewsUpdatesView styles={styles} />
        <OrderTimelineView styles={styles} />
        <TrafficBySiteView styles={styles} />
        <TasksView styles={styles} {...getter} {...setter} />
        <AnalyticsIcon styles={styles} />
      </View>
    </ScrollView>
  );
}

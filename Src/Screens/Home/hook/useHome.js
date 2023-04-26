import { HomeData } from '@/Mocks';
import { useMemo, useState } from 'react';

const useHome = (colors) => {
  const [tasks, setTasks] = useState([...HomeData.tasks]);
  const [bezier] = useState(HomeData.webSitesVisits);
  const [pieChartData] = useState(HomeData.currentVisits);

  const chartConfig = useMemo(() => {
    return {
      backgroundGradientFrom: colors.background,
      // backgroundGradientFromOpacity: 0,
      backgroundGradientTo: colors.background,
      // backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(45, 153, 255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false, // optional
      propsForDots: {
        r: '0',
        strokeWidth: '2',
        stroke: '#ffa726',
      },
    };
  }, [colors.background]);

  const getter = { tasks, pieChartData, bezier, chartConfig };
  const setter = { setTasks };

  return {
    getter,
    setter,
  };
};

export default useHome;

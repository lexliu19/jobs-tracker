import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import BarChartComponent from './BarChart';
import AreaChartComponent from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </button>
      {barChart ? (
        <BarChartComponent data={monthlyApplications} />
      ) : (
        <AreaChartComponent data={monthlyApplications} />
      )}
    </Wrapper>
  );
};
export default ChartsContainer;

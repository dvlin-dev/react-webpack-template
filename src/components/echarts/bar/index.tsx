import * as echarts from 'echarts/core';
import { useRef, useEffect } from 'react';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import PropType from '../type';
import { echartsResize } from '../untils/resize';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

function ECharts(props: PropType) {
  const echartsRef: any = useRef();
  const { title, xData, seriesData } = props;
  const option = {
    title: {
      text: title,
    },
    tooltip: {},
    xAxis: {
      data: xData,
    },
    yAxis: {},
    series: [
      {
        name: '访问量',
        type: 'bar',
        data: seriesData,
      },
    ],
  };
  useEffect(() => {
    const myChart = echarts.init(echartsRef.current);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    option && myChart.setOption(option);
    echartsResize(myChart);
  }, []);
  return (
    <div
      ref={echartsRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
export default ECharts;

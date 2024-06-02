import {PageContainer} from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {listInvokeTopnCountUsingGet} from "@/services/api-backend/interfaceInfoController";

/**
 * 接口统计
 * @constructor
 */
const Index: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  useEffect(() => {
    try {
      listInvokeTopnCountUsingGet().then(res => {
        if (res.data) {
          setData(res.data as any);
        }
      })
    } catch (e) {
    }
  }, [])

  // 映射：{ value: 1048, name: 'Search Engine' },
  const chartData = data.map(item => {
    return {
      value: item.totalNum,
      name: item.name,
    }
  })


  const option = {
    title: {
      text: '调用次数最多的接口TOP3',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <PageContainer title="接口统计">
      <ReactECharts showLoading={loading} option={option} />
    </PageContainer>
  );
};

export default Index;

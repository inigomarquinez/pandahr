import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ISkillsOverviewChartProps {
  data: any;
}

const SkillsOverviewChart = ({ data }: ISkillsOverviewChartProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data ?? []}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="progression" fill="#8884d8" />
      <Bar dataKey="desired" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default SkillsOverviewChart;

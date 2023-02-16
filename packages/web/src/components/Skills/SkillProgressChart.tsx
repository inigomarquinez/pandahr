import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
} from 'recharts';

interface ISkillProgressChartProps {
  data: any;
}

const SkillProgressChart = ({ data }: ISkillProgressChartProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="progression"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="desired" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default SkillProgressChart;

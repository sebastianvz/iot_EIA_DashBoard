import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Graph({ data, data_1 }) {
  return (
    <LineChart width={600} height={200}>
      <CartesianGrid strokeDasharray="10 10"></CartesianGrid>
      <XAxis type="number" dataKey="id"></XAxis>
      <YAxis></YAxis>
      <Legend></Legend>

      <Line type="monotone" dataKey="value" stroke="black" data={data}></Line>
      <Line type="monotone" dataKey="value" stroke="red" data={data_1}></Line>
      {/* <Line type="monotone" dataKey="amt" stroke="blue"></Line> */}
    </LineChart>
  );
}

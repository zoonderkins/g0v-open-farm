import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  { subject: "蔬菜", A: 10, B: 60, fullMark: 100 },
  { subject: "水果", A: 28, B: 80, fullMark: 100 },
  { subject: "熱量", A: 36, B: 90, fullMark: 100 },
  { subject: "果糖", A: 59, B: 50, fullMark: 100 }
];

export default class Chart extends Component {
  render() {
    return (
      <React.Fragment>
        <ResponsiveContainer width={300} height="90%">
          <RadarChart
            outerRadius={90}
            cx={160}
            width={450}
            height={250}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

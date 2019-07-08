import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

export default class Tutorial extends React.Component {
  render() {
    return (
      <div className="Tutorial">
        <Chart width={800} height={600} data={data} scale={cols}>
          <Axis name="genre" title/>
          <Axis name="sold" title />
          <Legend position="top" dy={-20} />
          <Tooltip />
          <Geom type="interval" position="genre*sold" color="genre" />
        </Chart>
      </div>
    )
  }
}

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

const cols = {
  sold: {alias: "sold"},
  genre: {alias: "genre"}
};
import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import './Sankey.scss';

export default class Sankey extends React.Component {
  componentDidMount() {
    this.sankeyChart();
  }

  componentWillUnmount() {
    if(this.chart) {
      this.chart.dispose();
    }
  }

  sankeyChart = () => {
    let chart = am4core.create("sankey", am4charts.SankeyDiagram);
    chart.data = data;
  }
  
  render() {
    return (
      <div className="Sankey">
        <div id="sankey"></div>
      </div>
    )
  }
}

const data = [
  { "from": "A", "to": "D", "value": 10 },
  { "from": "B", "to": "D", "value": 8 },
  { "from": "B", "to": "E", "value": 4 },
  { "from": "C", "to": "E", "value": 3 },
  { "from": "D", "to": "G", "value": 5 },
  { "from": "D", "to": "I", "value": 2 },
  { "from": "D", "to": "H", "value": 3 },
  { "from": "E", "to": "H", "value": 6 },
  { "from": "G", "to": "J", "value": 5 },
  { "from": "I", "to": "J", "value": 1 },
  { "from": "H", "to": "J", "value": 9 }
];
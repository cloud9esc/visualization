import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
//import { am4themes_myTheme } from '../Theme';

import './Sankey.scss';

export default class Sankey extends React.Component {
  componentDidMount() {
    this.sankeyChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  sankeyChart = () => {
    //am4core.useTheme(am4themes_myTheme);
    let chart = am4core.create("sankey", am4charts.SankeyDiagram);
    chart.data = data;

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    let nodeTemplate = chart.nodes.template;
    nodeTemplate.width = 30;
    //nodeTemplate.stroke = am4core.color("#fff");
    //odeTemplate.strokeWidth = 2;
    nodeTemplate.nameLabel.locationX = 0.2;
    nodeTemplate.nameLabel.label.fill = am4core.color("#fff");
    nodeTemplate.nameLabel.label.fontWeight = "bold";

    let linkTemplate = chart.links.template;
    // linkTemplate.controlPointDistance = 0.5;
    linkTemplate.colorMode = "gradient";
    linkTemplate.fillOpacity = 0.2;

  }

  render() {
    return (
      <div className="Sankey">
        <h1>it is Sankey diagram .</h1>
        <div id="sankey" className="Sankey__chart"></div>
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
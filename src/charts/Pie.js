import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import './Pie.scss';

am4core.useTheme(am4themes_animated);

class Pie extends React.Component {
  componentDidMount() {
    this.pieChart();
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  pieChart = () => {
    let chart = am4core.create("piediv", am4charts.PieChart3D);
    chart.data = data;
    chart.innerRadius = am4core.percent(30);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    let pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.depthValue = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.fillOpacity = 1;
    //stroke config
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 0.5;
    //default info disabled
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";

    let hs = pieSeries.slices.template.states.getKey("hover");
    hs.properties.scale = 1;
    hs.properties.fillOpacity = 0.5;

    let as = pieSeries.slices.template.states.getKey("active");
    as.properties.shiftRadius = -0.1;

    let pieSeries2 = chart.series.push(new am4charts.PieSeries3D());
    pieSeries2.dataFields.value = "bottles";
    pieSeries2.dataFields.depthValue = "bottles";
    //pieSeries2.dataFields.radiusValue = "bottles";
    pieSeries2.dataFields.category = "country";
    pieSeries2.slices.template.fillOpacity = 1;
    //stroke config
    pieSeries2.slices.template.stroke = am4core.color("#fff");
    pieSeries2.slices.template.strokeWidth = 1;
    pieSeries2.slices.template.strokeOpacity = 0.5;
    //default info disabled
    //pieSeries2.labels.template.disabled = true;
    //pieSeries2.ticks.template.disabled = true;
    pieSeries2.slices.template.tooltipText = "";

    pieSeries2.alignLabels = false;
    pieSeries2.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries2.labels.template.radius = am4core.percent(5);
    pieSeries2.labels.template.fill = am4core.color("#999");
    
    let hs2 = pieSeries2.slices.template.states.getKey("hover");
    hs2.properties.scale = 1;
    hs2.properties.fillOpacity = 0.5;
  }

  render() {
    return (
      <div className="Pie">
        <h1>it is Pie chart .</h1>
        <div id="piediv" className="Pie__chart"></div>
      </div>
    )
  }
}

const data = [{
  "country": "Lithuania",
  "litres": 501.9,
  "bottles": 1500
}, {
  "country": "Czech Republic",
  "litres": 301.9,
  "bottles": 990
}, {
  "country": "Ireland",
  "litres": 201.1,
  "bottles": 785
}, {
  "country": "Germany",
  "litres": 165.8,
  "bottles": 255
}, {
  "country": "Australia",
  "litres": 139.9,
  "bottles": 452
}, {
  "country": "Austria",
  "litres": 128.3,
  "bottles": 332
}, {
  "country": "UK",
  "litres": 99,
  "bottles": 150
}, {
  "country": "Belgium",
  "litres": 60,
  "bottles": 178
}, {
  "country": "The Netherlands",
  "litres": 50,
  "bottles": 50
}];

export default Pie;
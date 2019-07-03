import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { am4themes_smallTheme } from '../Theme';

import './Radar.scss';

class Radar extends React.Component {
  componentDidMount() {
    this.radarChart();
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  radarChart = () => {
    am4core.useTheme(am4themes_smallTheme);
    let chart = am4core.create("radar", am4charts.RadarChart);
    chart.data = data;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minGridDistance = 30;

    let series = chart.series.push(new am4charts.RadarSeries());
    series.name = "Sales";
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.strokeWidth =3;
    series.strokeOpacity = 0.7;
    series.zIndex = 2;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueY = "bottles";
    series2.dataFields.categoryX = "country";
    series2.name = "Units";
    series2.columns.template.fillOpacity = 0.7;
    series2.strokeWidth = 0;
    
    series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    am4core.unuseTheme(am4themes_smallTheme);
  }
  render() {
    return (
      <div className="Radar">
        <h1>it is Radar chart .</h1>
        <div id="radar" className="Radar__chart"></div>
      </div>
    )
  }
}

const data = [{
  "country": "Lithuania",
  "litres": 501.9,
  "bottles": 500
}, {
  "country": "Czech Republic",
  "litres": 301,
  "bottles": 690
}, {
  "country": "Ireland",
  "litres": 266,
  "bottles": 385
}, {
  "country": "Germany",
  "litres": 165,
  "bottles": 255
}, {
  "country": "Australia",
  "litres": 139,
  "bottles": 452
}, {
  "country": "Austria",
  "litres": 336,
  "bottles": 332
}, {
  "country": "UK",
  "litres": 290,
  "bottles": 150
}, {
  "country": "Belgium",
  "litres": 311,
  "bottles": 178
}, {
  "country": "The Netherlands",
  "litres": 70,
  "bottles": 50
}];

export default Radar;
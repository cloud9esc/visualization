import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import './XY.scss';

am4core.useTheme(am4themes_animated);

class XY extends React.Component {
  componentDidMount() {
    this.xyChart();
    this.xyChart2();
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  xyChart = () => {
    let chart = am4core.create("xychart", am4charts.XYChart);
    chart.data = data;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Sales";
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.columns.template.tooltipText = "{name}: {valueY}";
    series.columns.template.fill = am4core.color("#104547");
    series.columns.template.strokeOpacity = 0;
    series.stacked = true;

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.name = "bottles";
    series2.dataFields.valueY = "bottles";
    series2.dataFields.categoryX = "country";
    series2.columns.template.tooltipText = "{name}: {valueY}";
    series2.columns.template.fill = am4core.color('#CDA2AB');
    series2.columns.template.strokeOpacity = 0;
    //series2.strokeWidth = 3;
    series2.stacked = true;

    chart.cursor = new am4charts.XYCursor();
  }

  xyChart2 = () => {
    let chart2 = am4core.create("xychart2", am4charts.XYChart);
    chart2.data = data;

    let categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";

    let valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";

    let series = chart2.series.push(new am4charts.LineSeries());
    series.data = data;
    series.name = "Sales";
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.tooltipText = "{name}: {valueY}";
    series.stroke = am4core.color("#104547");
    series.tensionX = 0.8;
    series.strokeOpacity = 1;
    series.strokeWidth = 2;

    let bullet1 = series.bullets.push(new am4charts.CircleBullet());
    bullet1.stroke = am4core.color("#fff");
    bullet1.fill = am4core.color("#104547");

    let series2 = chart2.series.push(new am4charts.LineSeries());
    series2.data = data;
    series2.name = "bottles";
    series2.dataFields.valueY = "bottles";
    series2.dataFields.categoryX = "country";
    series2.tooltipText = "{name}: {valueY}";
    series2.stroke = am4core.color('#CDA2AB');
    series2.tensionX = 0.8;
    series2.strokeOpacity = 1;
    series2.strokeWidth = 2;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.stroke = am4core.color("#fff");
    bullet2.fill = am4core.color("#CDA2AB")

    let seriesTotal = chart2.series.push(new am4charts.LineSeries());
    seriesTotal.data = dataAll;
    seriesTotal.name = "Total"
    seriesTotal.dataFields.categoryX = "country";
    seriesTotal.dataFields.valueY = "total";
    seriesTotal.fill = am4core.color("#bbbbbb");
    seriesTotal.fillOpacity = 0.2;
    seriesTotal.tensionX = 0.8;
    seriesTotal.strokeOpacity = 0;
    seriesTotal.zIndex = -1;

    chart2.cursor = new am4charts.XYCursor();
  }


  render() {
    return (
      <div className="XY">
        <h1>it is XY-column chart .</h1>
        <div id="xychart" className="XY__chart"></div>
        <h1>it is XY-line chart .</h1>
        <div id="xychart2" className="XY__chart"></div>
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

const dataAll = data.map(item => {
  var returndata = {}
  returndata.country = item.country;
  returndata.total = (item.litres + item.bottles);
  return returndata;
}) 

export default XY;
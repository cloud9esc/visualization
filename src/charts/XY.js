import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { am4themes_smallTheme } from '../Theme';

import { getLettuceP } from './lettuce_p'
import './XY.scss';


class XY extends React.Component {
  componentDidMount() {
    this.xyChart();
    this.xyChart2();
    this.xyChart3();
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
    //categoryAxis.title.text = "Countries";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
      if (target.dataItem && ((target.dataItem.index % 2) !== 1)) {
        return dy + 15;
      }
      return dy;
    });


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";

    let range = valueAxis.axisRanges.create();
    range.value = 500;
    range.grid.stroke = am4core.color("#396428")
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 0.8;

    let range2 = valueAxis.axisRanges.create();
    range2.value = 1000;
    range2.grid.stroke = am4core.color("A96478");
    range2.grid.strokeWidth = 1;
    range2.grid.strokeOpacity = 0.6;

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
    am4core.useTheme(am4themes_smallTheme);
    let chart2 = am4core.create("xychart2", am4charts.XYChart);
    chart2.data = data;
    chart2.legend = new am4charts.Legend();

    let categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    let valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";

    let range = valueAxis.axisRanges.create();
    range.value = 500;
    range.grid.stroke = am4core.color("#396428")
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 0.3;


    let range2 = valueAxis.axisRanges.create();
    range2.value = 1000;
    range2.grid.stroke = am4core.color("A96478");
    range2.grid.strokeWidth = 1;
    range2.grid.strokeOpacity = 0.3;

    let series = chart2.series.push(new am4charts.LineSeries());

    series.name = "Sales";
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.tooltipText = "{name}: {valueY}";
    //series.stroke = am4core.color("#104547");
    series.tensionX = 0.8;
    series.strokeOpacity = 1;
    series.strokeWidth = 1;

    let bullet1 = series.bullets.push(new am4charts.CircleBullet());
    bullet1.stroke = am4core.color("#fff");
    bullet1.circle.radius = 3;
    //bullet1.fill = am4core.color("#104547");

    let series2 = chart2.series.push(new am4charts.LineSeries());

    series2.name = "bottles";
    series2.dataFields.valueY = "bottles";
    series2.dataFields.categoryX = "country";
    series2.tooltipText = "{name}: {valueY}";
    //series2.stroke = am4core.color('#CDA2AB');
    series2.tensionX = 0.8;
    series2.strokeOpacity = 1;
    series2.strokeWidth = 1;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet2.stroke = am4core.color("#fff");
    bullet2.circle.radius = 3;
    //bullet2.fill = am4core.color("#CDA2AB")

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

  xyChart3 = () => {
    am4core.useTheme(am4themes_smallTheme);

    let chart3 = am4core.create("lettuce", am4charts.XYChart);
    chart3.data = getLettuceP();

    chart3.legend = new am4charts.Legend();
    chart3.legend.position = "top";

    let dateAxis = chart3.xAxes.push(new am4charts.DateAxis());
    //dateAxis.dateFormats.setKey("month", "MMM");
    dateAxis.title.text = "Month";
    //dateAxis.renderer.minGridDistance = 30;

    let valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "price";

    let range = valueAxis.axisRanges.create();
    range.value = 800;
    range.endValue = 1000;
    range.axisFill.fill = am4core.color("#003f5c");
    range.axisFill.fillOpacity = 0.2;
    range.grid.strokeOpacity = 0;

    let range2 = valueAxis.axisRanges.create();
    range2.value = 1000;
    range2.endValue = 1200;
    range2.axisFill.fill = am4core.color("#58508d");
    range2.axisFill.fillOpacity = 0.2;
    range2.grid.strokeOpacity = 0;

    let range3 = valueAxis.axisRanges.create();
    range3.value = 1200;
    range3.endValue = 1400;
    range3.axisFill.fill = am4core.color("#bc5090");
    range3.axisFill.fillOpacity = 0.2;
    range3.grid.strokeOpacity = 0;

    let range4 = valueAxis.axisRanges.create();
    range4.value = 1400;
    range4.endValue = 1600;
    range4.axisFill.fill = am4core.color("#ff6361");
    range4.axisFill.fillOpacity = 0.2;
    range4.grid.strokeOpacity = 0;

    let range5 = valueAxis.axisRanges.create();
    range5.value = 1600;
    range5.endValue = 1800;
    range5.axisFill.fill = am4core.color("#ffa600");
    range5.axisFill.fillOpacity = 0.2;
    range5.grid.strokeOpacity = 0;

    let series = chart3.series.push(new am4charts.LineSeries());

    series.name = "price2019";
    series.dataFields.valueY = "p19";
    series.dataFields.dateX = "date";
    series.tooltipText = "{name}: {valueY}";
    series.tensionX = 0.8;
    series.stroke = am4core.color("#34aa45");
    series.strokeOpacity = 1;
    series.strokeWidth = 1;

    let series2 = chart3.series.push(new am4charts.LineSeries());

    series2.name = "price2020";
    series2.dataFields.valueY = "p20";
    series2.dataFields.dateX = "date";
    series2.tooltipText = "{name}: {valueY}";
    series2.tensionX = 0.8;
    series2.stroke = am4core.color('#dd4444');
    series2.strokeOpacity = 1;
    series2.strokeWidth = 1;


    chart3.cursor = new am4charts.XYCursor();
  }


  render() {
    return (
      <div className="XY">
        <h1>it is XY-column chart .</h1>
        <div id="xychart" className="XY__chart"></div>
        <h1>it is XY-line chart .</h1>
        <div id="xychart2" className="XY__chart"></div>
        <h1>양상추 가격 예측 차트</h1>
        <div id="lettuce" className="XY__chart2"></div>
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
import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import './Total.scss';

class Total extends React.Component {

  componentDidMount() {
    this.totalChart();
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  
  totalChart = () => {
    let chart = am4core.create("total", am4charts.XYChart);
    chart.data = data;

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "Year";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;

    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Percent";
    valueAxis.calculateTotals = true;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "%";
    });

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "cars";
    series.dataFields.valueYShow = "totalPercent";
    series.dataFields.categoryX = "year";
    series.name = "Cars";

    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 2;
    series.tooltip.label.fill = am4core.color("#555");
    series.fillOpacity = 0.5;

    series.stacked = true;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "motorcycles";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataFields.categoryX = "year";
    series2.name = "Motrocycles";

    series2.tooltipText = "{name}: [bold]{valueY}[/]"
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.background.fill = am4core.color("#fff");
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.background.strokeWidth = 2;
    series2.tooltip.label.fill = am4core.color("#555");
    series2.fillOpacity = 0.5;

    series2.stacked = true;

    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "bicycles";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataFields.categoryX = "year";
    series3.name = "Bicycles";

    series3.tooltipText = "{name}: [bold]{valueY}[/]";
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.background.fill = am4core.color("#fff");
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.strokeWidth = 2;
    series3.tooltip.label.fill = am4core.color("#555");

    series3.fillOpacity = 0.5;

    series3.stacked = true;

    chart.cursor = new am4charts.XYCursor();
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";

  }
  render() {
    return (
      <div className="Total">
        <div id="total" className="Total__chart" />
      </div>
    )
  }
}

export default Total;

const data = [{
  "year": "1995",
  "cars": 1567,
  "motorcycles": 683,
  "bicycles": 146
}, {
  "year": "1996",
  "cars": 1617,
  "motorcycles": 691,
  "bicycles": 138
}, {
  "year": "1997",
  "cars": 1630,
  "motorcycles": 642,
  "bicycles": 127
}, {
  "year": "1998",
  "cars": 1660,
  "motorcycles": 699,
  "bicycles": 105
}, {
  "year": "1999",
  "cars": 1683,
  "motorcycles": 721,
  "bicycles": 109
}, {
  "year": "2000",
  "cars": 1691,
  "motorcycles": 737,
  "bicycles": 112
}, {
  "year": "2001",
  "cars": 1298,
  "motorcycles": 680,
  "bicycles": 101
}, {
  "year": "2002",
  "cars": 1275,
  "motorcycles": 664,
  "bicycles": 97
}, {
  "year": "2003",
  "cars": 1246,
  "motorcycles": 648,
  "bicycles": 93
}, {
  "year": "2004",
  "cars": 1218,
  "motorcycles": 637,
  "bicycles": 101
}, {
  "year": "2005",
  "cars": 1213,
  "motorcycles": 633,
  "bicycles": 87
}, {
  "year": "2006",
  "cars": 1199,
  "motorcycles": 621,
  "bicycles": 79
}, {
  "year": "2007",
  "cars": 1110,
  "motorcycles": 210,
  "bicycles": 81
}, {
  "year": "2008",
  "cars": 1165,
  "motorcycles": 232,
  "bicycles": 75
}, {
  "year": "2009",
  "cars": 1145,
  "motorcycles": 219,
  "bicycles": 88
}, {
  "year": "2010",
  "cars": 1163,
  "motorcycles": 201,
  "bicycles": 82
}, {
  "year": "2011",
  "cars": 1180,
  "motorcycles": 285,
  "bicycles": 87
}, {
  "year": "2012",
  "cars": 1159,
  "motorcycles": 277,
  "bicycles": 71
}];
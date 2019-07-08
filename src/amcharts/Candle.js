import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
//import { am4themes_smallTheme } from '../Theme';
import getCandledata from './candledata';

import './Candle.scss';

export default class Candle extends React.Component {

  componentDidMount() {
    this.candleChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  candleChart = () => {
    let chart = am4core.create("candleChart", am4charts.XYChart);
    chart.data = getCandledata()

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "종가";
    series.dataFields.openValueY = "시가";
    series.dataFields.lowValueY = "저가";
    series.dataFields.highValueY = "고가";
    series.simplifiedProcessing = true;

    series.riseFromPreviousState.properties.fillOpacity = 1;
    series.dropFromPreviousState.properties.fillOpacity = 0;

    series.tooltipText = "Open:{openValueY.value}\nLow:{lowValueY.value}\nHigh:{highValueY.value}\nClose:{valueY.value}";

    chart.cursor = new am4charts.XYCursor();

    //scrollbar series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.dateX = "date";
    lineSeries.dataFields.valueY = "종가";
    lineSeries.defaultState.properties.visible = false;

    lineSeries.hiddenInLegend = true;
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeOpacity = 0.5;

    var scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(lineSeries);
    chart.scrollbarX = scrollbarX;
  }

  render() {
    return (
      <div className="Candle">
        <div id="candleChart" className="Candle__chart"></div>
      </div>
    )
  }
}
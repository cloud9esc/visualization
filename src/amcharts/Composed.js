import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import './Composed.scss';

class Composed extends React.Component {
  componentDidMount() {
    this.composedChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  composedChart = () => {
    let container = am4core.create("chartdiv", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "vertical";

    let priceChart = container.createChild(am4charts.XYChart);
    priceChart.height = 400;
    priceChart.valign = "top";
    priceChart.padding(50, 50, 50, 50);
    priceChart.dataSource.url = "/src/priceband.json";

    let dateAxis = priceChart.xAxes.push(new am4charts.DateAxis());
    dateAxis.tooltip.background.fill = am4core.color("#fff");

    let valueAxis = priceChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.ticks.template.disabled = true;

    let avgSeries = priceChart.series.push(new am4charts.LineSeries());
    avgSeries.dataFields.valueY = "avg";
    avgSeries.dataFields.dateX = "date";
    avgSeries.stroke = am4core.color("#34aa45");
    avgSeries.strokeWidth = 2;

    //draw band
    let range = valueAxis.axisRanges.create();
    range.value = 500;
    range.endValue = 700;
    range.axisFill.fill = am4core.color("#003f5c");
    range.axisFill.fillOpacity = 0.2;
    range.grid.strokeOpacity = 0;

    let range2 = valueAxis.axisRanges.create();
    range2.value = 700;
    range2.endValue = 900;
    range2.axisFill.fill = am4core.color("#58508d");
    range2.axisFill.fillOpacity = 0.2;
    range2.grid.strokeOpacity = 0;

    let range3 = valueAxis.axisRanges.create();
    range3.value = 900;
    range3.endValue = 1100;
    range3.axisFill.fill = am4core.color("#bc5090");
    range3.axisFill.fillOpacity = 0.2;
    range3.grid.strokeOpacity = 0;

    let range4 = valueAxis.axisRanges.create();
    range4.value = 1100;
    range4.endValue = 1300;
    range4.axisFill.fill = am4core.color("#ff6361");
    range4.axisFill.fillOpacity = 0.2;
    range4.grid.strokeOpacity = 0;

    let range5 = valueAxis.axisRanges.create();
    range5.value = 1300;
    range5.endValue = 1500;
    range5.axisFill.fill = am4core.color("#ffa600");
    range5.axisFill.fillOpacity = 0.2;
    range5.grid.strokeOpacity = 0;

    priceChart.scrollbarX = new am4charts.XYChartScrollbar();
    priceChart.scrollbarX.series.push(avgSeries);
  }

  render() {
    return (
      <div className="Composed"></div>
    )
  }
}

export default Composed;
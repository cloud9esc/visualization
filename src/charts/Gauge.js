import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import './Gauge.scss';

class Gauge extends React.Component {

  componentDidMount() {
    this.gaugeChart();
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  gaugeChart = () => {
    let chart = am4core.create("gaugediv", am4charts.GaugeChart);
    chart.innerRadius = -20;
    chart.startAngle = -180;
    chart.endAngle = 0;

    //creating an axis. it goes x direction
    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;

    let range1 = axis.axisRanges.create();
    range1.value = 0;
    range1.endValue = 70;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color("#88AB75");
    range1.axisFill.zIndex = -1;

    let range2 = axis.axisRanges.create();
    range2.value = 70;
    range2.endValue = 100;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("#dada22")
    range2.axisFill.zIndex = -1;

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.fill = am4core.color("#2D93AD");
    hand.stroke = am4core.color("#2D93AD");
    hand.radius = am4core.percent(70);
    hand.showValue(Math.round(Math.random()*100));
    

    this.chart = chart;
  }
  render() {

    return (
      <div className="Gauge">
        <h1>it is gauge chart .</h1>
        <div id="gaugediv" className="Gauge__chart"></div>
      </div>
    );
  }
}

export default Gauge;

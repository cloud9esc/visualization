import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_myTheme from './Theme';

import Pie from '../src/charts/Pie';
import Gauge from '../src/charts/Gauge';
import './App.css';
import XY from './charts/XY';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_myTheme);

function App() {

  return (
    <div className="App">
      <Gauge />
      <Pie />
      <XY />
    </div>
  );
}

export default App;

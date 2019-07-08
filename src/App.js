import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { am4themes_myTheme } from './Theme';

import Pie from '../src/amcharts/Pie';
import Gauge from '../src/amcharts/Gauge';
import './App.css';
//import XY from './amcharts/XY';
import Radar from './amcharts/Radar';
import XY from './amcharts/XY';
import Sankey from './amcharts/Sankey';
import Total from './amcharts/Total';
//import Candle from './amcharts/Candle';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_myTheme);

function App() {

  return (
    <div className="App">
      <Gauge />
      <Pie />
      <XY />
      <Radar />
      <Sankey />
      <Total />
    </div>
  );
}

export default App;

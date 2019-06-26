import React from 'react';

import Pie from '../src/charts/Pie';
import Gauge from '../src/charts/Gauge';
import './App.css';
import XY from './charts/XY';

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

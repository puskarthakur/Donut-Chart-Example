import * as React from 'react';
import './style.css';
import DonutChart from './DonutChart';

export default function App() {
  const items = ['ECG', 'Menu2', 'Menu3', 'Menu4', 'Menu5', 'Menu6', 'ECG'];

  return (
    <div>
      <h1>Donut Chart Example</h1>
      <DonutChart items={items} />
    </div>
  );
}

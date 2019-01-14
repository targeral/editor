import * as React from 'react';
import { SvgSystem } from './containers/svgSystem';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <SvgSystem />
      </div>
    );
  }
}

export default App;

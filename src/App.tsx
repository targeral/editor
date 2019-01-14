import * as React from 'react';
import './App.css';

import Logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}
        >
          <Logo />
        </svg>
        <svg width="15px" height="15px">
          <use xlinkHref="#logo" />
        </svg>
      </div>
    );
  }
}

export default App;

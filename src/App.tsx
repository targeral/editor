import * as React from 'react';
<<<<<<< HEAD
import { SvgSystem } from './containers/svgSystem';
import './App.css';
=======
import './App.less';
import A from './components/A';
import B from './components/B';
import Logo from './logo.svg';
>>>>>>> 02af377463857aba705fa4b9e70fdc9ec722305b

class App extends React.Component {

  public state = {
    notification: {}
  }

  public notifyMe() {
    if (!('Notification' in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === 'granted') {
      this.state.notification = new Notification('Hi there!');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          this.state.notification = new Notification('Hi there!');
        }
      })
    }
  }
  public render() {
    const notifyMe = this.notifyMe.bind(this);
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
        <A />
        <B />
        <button onClick={notifyMe}>Notify me!</button>
      </div>
    );
  }
}

export default App;

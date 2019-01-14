import * as React from 'react';
import {
  Logo
} from './svgs';
import './style.less';

class SvgSystem extends React.Component {
  public render() {
    let svgCls = 'svg';
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={svgCls}
      >
        <Logo />
      </svg>
    );
  }
}

export default SvgSystem;

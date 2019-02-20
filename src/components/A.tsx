import { now } from 'moment';
import * as React from 'react';


class A extends React.Component {
  public render() {
    return (
      <div>A{now()}</div>
    );
  }
}

export default A;

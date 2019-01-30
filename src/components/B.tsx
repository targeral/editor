import { now } from 'moment';
import * as React from 'react';

class B extends React.Component {
    public render() {
        return (
            <div>B{now()}</div>
        );
    }
}

export default B;

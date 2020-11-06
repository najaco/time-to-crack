import React, { useState, FunctionComponent } from 'react';
import { Calculator } from './Calculator';
import {Duration} from './api'
const TimeToCrack = (): JSX.Element => {
    const [duration, setDuration] = useState(new Duration());
    return (
        <div className="TimeToCrack">
            <Calculator setDuration={setDuration}/>
            {JSON.stringify(duration)}
        </div>
    );
}

export default TimeToCrack;

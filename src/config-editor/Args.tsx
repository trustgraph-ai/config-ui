
import React from 'react';

import { Pattern, ParameterSet } from './Pattern';
import { changeParam } from './change-param';

interface ArgsProps {
    selection : Pattern;
    parameters : ParameterSet;
    setParameters : (value : ParameterSet) => void;
};

const Args : React.FC<ArgsProps> =
    ({ selection, parameters, setParameters }) => 
{

    return selection.pattern.args.map(
        (field) => 
            <div key={selection.pattern.name + "//" + field.name}>
                <div>{field.description}</div>
                <div>{selection.pattern.name}</div>
                <div>{field.name}</div>
                <div>
                    <textarea
                        defaultValue={parameters.get(selection.pattern.name)!.get(field.name)}
                        onChange={e => changeParam(selection.pattern.name, field.name, e.target.value, parameters, setParameters)}
                    />
                </div>
            </div>
    );

}

export default Args;


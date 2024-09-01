
import React from 'react';

import Parameters from './Parameters';
import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';

interface PatternParametersProps {
    selection : Pattern;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
};

const PatternParameters : React.FC<PatternParametersProps> = 
    ({ selection, parameters, setParameter }) =>
{

    return (
        <>
            <h2>{selection.pattern.title}</h2>
            <p>{selection.pattern.description}</p>
            <Parameters
                pattern={selection}
                parameters={parameters}
                setParameter={setParameter}
            />
        </>
        
    );

}

export default PatternParameters;


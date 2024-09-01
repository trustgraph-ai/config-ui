
import React from 'react';

import Args from './Args';
import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';

interface ItemParametersProps {
    selection : Pattern;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
};

const ItemParameters : React.FC<ItemParametersProps> = 
    ({ selection, parameters, setParameter }) =>
{

    return (
        <>
            <h2>{selection.pattern.title}</h2>
            <p>{selection.pattern.description}</p>
            <Args
                pattern={selection}
                parameters={parameters}
                setParameter={setParameter}
            />
        </>
        
    );

}

export default ItemParameters;



import React from 'react';

import Args from './Args';
import { Pattern, ParameterSet } from './Pattern';

interface ItemParametersProps {
    selection : Pattern;
    parameters : ParameterSet;
    setParameters : (value : ParameterSet) => void;
};

const ItemParameters : React.FC<ItemParametersProps> = 
    ({ selection, parameters, setParameters }) =>
{

    return (
        <>
            <h2>{selection.pattern.title}</h2>
            <p>{selection.pattern.description}</p>
            <Args
                selection={selection}
                parameters={parameters}
                setParameters={setParameters}
            />
        </>
        
    );

}

export default ItemParameters;


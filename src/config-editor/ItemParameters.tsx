
import React from 'react';

import Args from './Args';
import { Pattern } from './Pattern';

interface ItemParametersProps {
    selection : Pattern;
    configuration : any;
    parameters : any;
    setParameters : any;
};

const ItemParameters : React.FC<ItemParametersProps> = 
    ({ selection, configuration, parameters, setParameters }) =>
{

console.log(configuration);
 // FIXME: Shouldn't happen?
//    if (!selection) return;
/*
    if (!(selection.pattern.name in parameters)) {
        parameters = {
            ...parameters,
            [selection.pattern.name]: {}
        };
    }
    */

    let sparams = parameters[selection.pattern.name];

    selection.pattern.args.map(
        (field : any) => {
            if (!(field.name in sparams))
                sparams[field.name] = field.default;
        }
    );

//    const inConfig = patternsInConfig.has(selection);

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


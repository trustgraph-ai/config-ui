
import React from 'react';

import ItemParameters from './ItemParameters';
import { Pattern, ParameterSet } from './Pattern';

interface ParametersProps {
    selection : Pattern | null;
    deployment : string | null;
    parameters : ParameterSet;
    setParameters : (value : ParameterSet) => void;
};

const Parameters : React.FC<ParametersProps> =
    ({ selection, deployment, parameters, setParameters }) =>
{    

    if (deployment)
        return (
            <div className="card deployment-config">
                <h2>Deployment configuration</h2>
                <textarea value={deployment} readOnly={true}/>
            </div>
        );

    if (selection == null) return null;

    return (

        <div className="card item-editor">

        <ItemParameters
            selection={selection}
            parameters={parameters}
            setParameters={setParameters}
        />

        </div>
        
    );

}

export default Parameters;



import React from 'react';

import ItemParameters from './ItemParameters';

interface ParametersProps {
    selection : any;
    configuration : any;
    deployment : string | null;
    parameters : any;
    setParameters : any;
};

const Parameters : React.FC<ParametersProps> =
    ({ selection, configuration, deployment, parameters, setParameters }) =>
{    

    if (deployment)
        return (
            <div className="card deployment-config">
                <h2>Deployment configuration</h2>
                <textarea value={deployment} readOnly={true}/>
            </div>
        );

    return (

        <div className="card item-editor">

        <ItemParameters
            selection={selection}
            configuration={configuration}
            parameters={parameters}
            setParameters={setParameters}
            />

        </div>
        
    );

}

export default Parameters;


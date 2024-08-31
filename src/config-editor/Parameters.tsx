
import React from 'react';

import Button from '@mui/material/Button';
import { ContentPaste } from '@mui/icons-material';

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

    const copyToClipboard = () => {
        if (deployment) {
            navigator.clipboard.writeText(deployment);
        }
    }

    if (deployment)
        return (
            <div className="card deployment-config">
                <h2>Deployment configuration</h2>
                <textarea value={deployment} readOnly={true}/>
                <Button onClick={copyToClipboard} variant="outlined"
                    startIcon={<ContentPaste/>}
                >
                    Copy to clipboard
                </Button>
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


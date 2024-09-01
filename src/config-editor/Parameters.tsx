
import React from 'react';

import Button from '@mui/material/Button';
import { ContentPaste } from '@mui/icons-material';

import ItemParameters from './ItemParameters';
import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';

interface ParametersProps {
    selection : Pattern | null;
    deployment : string | null;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
};

const Parameters : React.FC<ParametersProps> =
    ({ selection, deployment, parameters, setParameter }) =>
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
            setParameter={setParameter}
        />

        </div>
        
    );

}

export default Parameters;


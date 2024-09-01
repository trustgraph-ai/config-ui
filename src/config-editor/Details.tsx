
import React from 'react';

import Button from '@mui/material/Button';
import { ContentPaste } from '@mui/icons-material';
import TextField from '@mui/material/TextField';

import PatternParameters from './PatternParameters';
import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';

interface DetailsProps {
    selection : Pattern | null;
    deployment : string | null;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
};

const Details : React.FC<DetailsProps> =
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

                <TextField
                    sx={{
                        width: "100%",
                    }}
                    value={deployment}
                    size="medium"
                    slotProps={{
                        input: {
                            readOnly: true,
                            sx: {
                                fontSize: "medium",
                                fontWeight: 500,
                                fontFamily: "monospace",
                            },
                        },
                    }}
                    multiline
                    maxRows={20}
                />

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

        <PatternParameters
            selection={selection}
            parameters={parameters}
            setParameter={setParameter}
        />

        </div>
        
    );

}

export default Details;


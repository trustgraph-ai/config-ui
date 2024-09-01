
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
    ParameterDefinition, ParameterValue
} from './Pattern';

interface ArgProps {
    field : ParameterDefinition,
    value : ParameterValue,
    setParameter : (
        value : ParameterValue
    ) => void;
};

const Arg : React.FC<ArgProps> =
    ({ field, value, setParameter }) => 
{

    return ( 
        <Box>
            {field.description}
            <TextField
                defaultValue={value}
                onChange={e => {
                    if (!e.target.value) return;
                    setParameter(
                        e.target.value
                    );
                }}
            />
        </Box>
    );

}

export default Arg;


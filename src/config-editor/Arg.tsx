
import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';
import { changeParam } from './change-param';

interface ArgProps {
    field : Arg,
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
                onChange={e => setParameter(
                    e.target.value
                )}
            />
        </Box>
    );

}

export default Arg;


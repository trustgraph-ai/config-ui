
import React from 'react';

import Box from '@mui/material/Box';

import Arg from './Arg';
import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';

interface ArgsProps {
    pattern : Pattern;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
};

const Args : React.FC<ArgsProps> =
    ({ pattern, parameters, setParameter }) => 
{

    const params = parameters.get(pattern.pattern.name)!;

    return pattern.pattern.args.map(
        (field) => {

            let value = params.get(field.name);
            if (!value) value = "";

            const set = (value : ParameterValue) => {
                setParameter(pattern, field, value);
            }

            return (
                <Box key={field.name}>
                    <Arg
                        field={field}
                        value={value}
                        setParameter={set}
                        />
                </Box>
            );
        }

    );

}

export default Args;


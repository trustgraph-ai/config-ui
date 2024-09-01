
import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Parameter from './Parameter';
import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';

interface ParametersProps {
    pattern : Pattern;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
};

const Parameters : React.FC<ParametersProps> =
    ({ pattern, parameters, setParameter }) => 
{

    const params = parameters.get(pattern.pattern.name)!;

    return (
        <Stack spacing={3}>

        {
            pattern.pattern.args.map(
                (field) => {

                    let value = params.get(field.name);
                    if (value == null || value == undefined) value = "";

                    const set = (value : ParameterValue) => {
                        setParameter(pattern, field, value);
                    }

                    return (
                        <Box key={field.name}>
                            <Parameter
                                field={field}
                                value={value}
                                setParameter={set}
                                />
                        </Box>
                    );
                }
           )
       }

       </Stack>

    );

}

export default Parameters;


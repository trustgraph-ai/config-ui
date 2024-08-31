
import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Pattern } from './Pattern';
import { getIcon } from './icons';

interface PlanItemProps {
    pattern : Pattern;
    select : (value : Pattern) => void;
    remove : (value : Pattern) => void;
    selection : Pattern | null;
}

const PlanItem : React.FC<PlanItemProps> =
    ({ pattern, select, remove, selection }) =>
{

    const meta = pattern.pattern;

    return (
        <Paper
            sx={{ p: 1, alignItems: 'flex-center' }}
            className={(pattern == selection) ? "selected" : ""}
            >
            <Stack direction="row" spacing={2}>
                <Box sx={{ minWidth: 50, maxWidth: 50 }}>
                    {getIcon(meta.category[0])}
                </Box>
                <Box sx={{ minWidth: 375, maxWidth: 400 }}>
                    <div>{meta.title}</div>
                </Box>
                <Box>
                    <Button onClick={() => select(pattern)}>
                        parameters
                    </Button>
                </Box>
                <Box>
                    <Button onClick={() => remove(pattern)}>
                        remove
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );

}

export default PlanItem;


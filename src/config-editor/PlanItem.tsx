
import React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Delete, Settings } from '@mui/icons-material';

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
        <Card>
            <CardHeader
                avatar={getIcon(meta.category[0])}
                title={meta.title}
                action={
                <>
                <IconButton color="primary" size="small"
                    onClick={() => select(pattern)}>
                    <Settings/>
                </IconButton>
                <IconButton color="warning" size="small"
                    onClick={() => remove(pattern)}>
                    <Delete/>
                </IconButton>
                </>
                }
               />
        </Card>
    );

}

export default PlanItem;


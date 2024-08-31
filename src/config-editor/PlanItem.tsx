
import React from 'react';

import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Delete, Settings } from '@mui/icons-material';

import { Pattern } from './Pattern';
import { getIcon } from './icons';

interface PlanItemProps {
    pattern : Pattern;
    select : (value : Pattern) => void;
    remove : (value : Pattern) => void;
    selected : boolean;
}

const PlanItem : React.FC<PlanItemProps> =
    ({ pattern, select, remove, selected }) =>
{

    const meta = pattern.pattern;

    return (
        <Card sx={{
            bgcolor: selected ? 'primary.main' : 'theme',
            color: selected ? 'primary.contrastText' : 'theme',
         }}>
            <CardHeader
                avatar={getIcon(meta.category[0])}
                title={meta.title}
                action={
                <>
                <IconButton
                    size="small"
                    onClick={() => select(pattern)}>
                    <Settings sx={{
                       color: selected ? 'primary.contrastText' : 'text.primary'
                     }}/>
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


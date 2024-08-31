
import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';

import { Pattern } from './Pattern';
import { getIcon } from './icons';

interface AvailablePatternProps {
    pattern : Pattern;
    add : (value : string) => void;
}

const AvailablePattern : React.FC<AvailablePatternProps> =
    ({ pattern, add }) =>
{
    const meta = pattern.pattern;

    return (

    <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 350 }}>
      <CardHeader
        avatar={getIcon(pattern.pattern.category[0])}
        title={pattern.pattern.title}
        subheader={pattern.pattern.category[0] + " pattern"}
      />
      <CardContent>
        <Typography variant="body2">
            {pattern.pattern.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => add(meta.name)}>Add</Button>
      </CardActions>
    </Card>

    );

}

export default AvailablePattern;


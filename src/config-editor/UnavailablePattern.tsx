import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Error } from '@mui/icons-material';

import { Pattern } from './Pattern';
import { icons } from './icons';

interface UnavailablePatternProps {
    pattern : Pattern;
}

const UnavailablePattern : React.FC<UnavailablePatternProps> =
    ({ pattern }) =>
{
    const meta = pattern.pattern;


    return (

        <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 350 }}>
          <CardHeader
            avatar={icons[pattern.pattern.category[0]]}
            title={pattern.pattern.title}
            subheader={pattern.pattern.category[0] + " pattern"}
          />
          <CardContent>
            <Typography variant="body2" sx={{mb: 1.5}}>
                {pattern.pattern.description}
            </Typography>
            <Box>
            {
                meta.requires.map(
                    (p) => (
                        <Chip
                            key={p}
                            avatar={<Error fontSize="small"/>}

                            label={"needs " + p}
                            sx={{mr: 1}}
                        />
                    )
                )
            }
            </Box>
            
          </CardContent>
        </Card>

    );

}

export default UnavailablePattern;


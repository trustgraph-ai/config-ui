import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Warning, Error } from '@mui/icons-material';

import { Pattern } from './Pattern';

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
            avatar={<Warning/>}
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
                        <Chip color="warning"
                            key={p}
                            variant="filled"
                            avatar={<Error fontSize="large"/>}
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


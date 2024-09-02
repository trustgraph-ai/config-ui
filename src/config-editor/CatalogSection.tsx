
import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';

import AvailablePattern from './AvailablePattern';
import UnavailablePattern from './UnavailablePattern';
import { Pattern } from './Pattern';

interface CatalogSectionProps {
    id : string,
    name : string,
    patterns : Pattern[];
    add : (value : string) => void;
    expanded : string | false;
    handleChange : any;
}

const CatalogSection : React.FC<CatalogSectionProps> =
    ({ id, name, patterns, add, expanded, handleChange}) =>
{

    return (
        <Accordion key={id}
            expanded={expanded == id}
            onChange={handleChange(id)}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                id={id}>
                {name}
            </AccordionSummary>
            <AccordionDetails>
                <Stack
                    direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}
                    useFlexGap={true}
                >
                {
                    patterns.map(
                        pat => {
                            if (id != "unavailable")
                                return (
                                    <AvailablePattern
                                        key={pat.pattern.name}
                                        pattern={pat}
                                        add={add}/>
                                );
                            else
                                return (
                                    <UnavailablePattern
                                        key={pat.pattern.name}
                                        pattern={pat}/>
                                );
                        }
                    )
                }
                </Stack>
            </AccordionDetails>
        </Accordion>
    );

}

export default CatalogSection;

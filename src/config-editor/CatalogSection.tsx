
import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import AvailablePattern from './AvailablePattern';
import UnavailablePattern from './UnavailablePattern';

interface CatalogSectionProps {
    id : string,
    name : string,
    patterns : Pattern[];
    add : (value : string) => void;
}

const CatalogSection : React.FC<CatalogSectionProps> =
    ({ id, name, patterns, add}) =>
{

    return (
        <Accordion key={id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                id={id}>
                {name}
            </AccordionSummary>
            <AccordionDetails>
                <div className="catalog-section">
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
                </div>
            </AccordionDetails>
        </Accordion>
    );

}

export default CatalogSection;

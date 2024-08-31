import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


export 

                {
                    catalog.map(
                        cat => {
                            return (
                                <CatalogSection
                                    key={cat.id}
                                    id={cat.id}
                                    name={cat.name}
                                    patterns={cat.patterns}
                                    


                             <Accordion key={cat.id}>
                                 <AccordionSummary
                                     expandIcon={<ExpandMoreIcon/>}
                   




                <Catalog

            {
                catalog.map(
                    cat => {
                        return (
                             <Accordion key={cat.id}>
                                 <AccordionSummary
                                     expandIcon={<ExpandMoreIcon/>}
                                     id={cat.id}>
                                         {cat.name}
                                 </AccordionSummary>
                                 <AccordionDetails>
                                 {
                                     cat.patterns.map(
                                         pat => (
                                         <AvailablePattern
                                             key={cat.patterns.name}
                                             pattern={pat}
                                             add={add}/>
                                          )
                                     )
                                 }
                                 </AccordionDetails>
                             </Accordion>
                         )
                    }
                )
        }

    </div>

</div>

    );

}



import React from 'react';

import CatalogSection from './CatalogSection';

interface CatalogContentProps {
    catalog : { id : string, name : string, patterns : Pattern[] }[];
    add : (value : string) => void;
}

const CatalogContent : React.FC<CatalogContentProps> =
    ({ catalog, add}) =>
{

    return catalog.map(
        cat => {
            return (
                <CatalogSection
                    key={cat.id}
                    id={cat.id}
                    name={cat.name}
                    patterns={cat.patterns}
                    add={add}
                    />
            )
       }
   );

}

export default CatalogContent;







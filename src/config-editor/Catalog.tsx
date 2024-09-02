import React from 'react';

import { Pattern } from './Pattern';
import CatalogSection from './CatalogSection';
import { categories } from './categories';

interface CatalogProps {
    available : Pattern[],
    unavailable : Pattern[],
    add : (value : string) => void;
}

const Catalog : React.FC<CatalogProps> =
    ({ available, unavailable, add }) =>
{

    if (available.length == 0 && unavailable.length == 0) return null;

    let catalog = categories.map(
        cat => {
            return {
                id: cat.id,
                name: cat.name,
                patterns: available.filter(
                    pat => pat.pattern.category.includes(cat.id)
                )
            }
        }
    ).filter(
        cat => cat.patterns.length > 0
    );

    catalog.push({
        id: "unavailable",
        name: "Unavailable (dependencies not met)",
        patterns: unavailable
    });

    return (
        <div className="card">

            <h2>Configuration pattern catalog</h2>

            <div className="catalog">

                {
                    catalog.map(
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
                   )
               }

            </div>

        </div>

    );

}

export default Catalog;


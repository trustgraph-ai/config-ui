import React from 'react';

import { Pattern } from './Pattern';
import CatalogContent from './CatalogContent';

const categories : { id : string; name : string }[] = [
    { id: "foundation", name: "Foundation" },
    { id: "llm", name: "LLM" },
    { id: "knowledge-graph", name: "Knowledge graph" },
    { id: "prompting", name: "Prompting" },
    { id: "chunking", name: "Chunking" },
    { id: "monitoring", name: "Monitoring" },
    { id: "vector-store", name: "Vector store" },
];

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
                <CatalogContent catalog={catalog} add={add}/>
            </div>

        </div>

    );

}

export default Catalog;


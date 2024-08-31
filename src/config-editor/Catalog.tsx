import React from 'react';

import { Pattern } from './Pattern';
import AvailablePattern from './AvailablePattern';
import UnavailablePattern from './UnavailablePattern';

interface CatalogProps {
    available : Pattern[],
    unavailable : Pattern[],
    add : (value : string) => void;
    patterns : Pattern[]
}

const categories : { id : string; name : string } = [
    { id: "foundation", name: "Foundation" },
    { id: "llm", name: "LLM" },
    { id: "knowledge-graph", name: "Knowledge graph" },
    { id: "prompting", name: "Prompting" },
    { id: "chunking", name: "Chunking" },
    { id: "monitoring", name: "Monitoring" },
    { id: "vector-store", name: "Vector store" },
];

const Catalog : React.FC<CatalogProps> =
    ({ available, unavailable, add, patterns}) =>
{

    if (available.length == 0 && unavailable.length == 0) return null;

    let catalog = categories.map(
        cat => {
            return {
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
        name: "Unavailable",
        patterns: unavailable,
    });

    return (
        <div className="card">

            <h2>Configuration pattern catalog</h2>

            <div className="catalog">

                {
                    available.map((p) => (
                        <AvailablePattern
                            key={p.pattern.name}
                            pattern={p}
                            add={add}
                        />
                    ))
                }

                {
                    unavailable.map((p) => (
                        <UnavailablePattern
                            key={p.pattern.name}
                            pattern={p}
                        />
                    ))
                }

            </div>

        </div>
    );

}

export default Catalog;


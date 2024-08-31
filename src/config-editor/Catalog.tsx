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

const Catalog : React.FC<CatalogProps> =
    ({ available, unavailable, add, patterns}) =>
{

    let featureMap = new Map<string, string>();

    patterns.map(
        (p) =>
            p.pattern.features.map(
                (f) => {
                    featureMap.set(f, p.pattern.title);
                }
            )
    );

    if (available.length == 0 && unavailable.length == 0) return null;

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


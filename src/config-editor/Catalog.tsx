
import React from 'react';
import { Pattern } from './Pattern';

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
                    available.map((n) => (
                        <div
                            className="catalog-item available"
                            key={n.pattern.name}
                        >
                            <div className="title">{n.pattern.icon} {n.pattern.title}</div>
                            <div className="description">{n.pattern.description}</div>
                            <div className="additional">
				<button onClick={() => add(n.pattern.name)}>
				    add
				</button>
			    </div>
			    <div></div>
                        </div>
                    ))
                }

                {
                    unavailable.map((n) => (
                        <div
                            className="catalog-item unavailable"
                            key={n.pattern.name}
                        >
                            <div className="title">{n.pattern.icon} {n.pattern.title}</div>
                            <div className="description">{n.pattern.description}</div>
                            <div className="additional">
                            {

                                n.pattern.requires.map(
                                    (p) => (
                                        <span
                                            className="dep"
                                           key={p}
                                        >
                                            needs {p}
                                        </span>
                                    )
                                )


                            }
                            </div>
                        </div>
                    ))
                }

            </div>


        </div>
    );

}

export default Catalog;


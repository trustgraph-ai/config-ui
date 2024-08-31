import React from 'react';

import { Pattern } from './Pattern';

interface UnavailablePatternProps {
    pattern : Pattern;
}

const UnavailablePattern : React.FC<UnavailablePatternProps> =
    ({ pattern }) =>
{
    const meta = pattern.pattern;

    return (
        <div
            className="catalog-item unavailable"
        >
            <div className="title">{meta.icon} {meta.title}</div>
            <div className="description">{meta.description}</div>
            <div className="additional">
            {

                meta.requires.map(
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
    );

}

export default UnavailablePattern;


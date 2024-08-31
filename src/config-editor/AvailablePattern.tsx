
import React from 'react';

import { Pattern } from './Pattern';

interface AvailablePatternProps {
    pattern : Pattern;
    add : (value : string) => void;
}

const AvailablePattern : React.FC<AvailablePatternProps> =
    ({ pattern, add }) =>
{
    const meta = pattern.pattern;

    return (
        <div
            className="catalog-item available"
        >
            <div className="title">{meta.icon} {meta.title}</div>
            <div className="description">{meta.description}</div>
            <div className="additional">
                <button onClick={() => add(meta.name)}>
                    add
                </button>
            </div>
            <div></div>
        </div>
    );

}

export default AvailablePattern;


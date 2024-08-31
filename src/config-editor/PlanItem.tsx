
import React from 'react';

import Stack from '@mui/material/Stack';

import { Pattern } from './Pattern';

interface PlanItemProps {
    pattern : Pattern;
    select : (value : Pattern) => void;
    remove : (value : Pattern) => void;
    selection : Pattern | null;
}

const PlanItem : React.FC<PlanItemProps> =
    ({ pattern, select, remove, selection }) =>
{

    const meta = pattern.pattern;

    return (
        <div key={meta.name}
            className={(pattern == selection) ? "plan-item selection" : "plan-item"}
            >
            <div>{meta.icon} {meta.title}</div>
            <div>
                <button onClick={() => select(pattern)}>
                    parameters
                </button>
                <button onClick={() => remove(pattern)}>
                    remove
                </button>
            </div>
            <div></div>
        </div>
    );

}

export default PlanItem;



import React from 'react';

import Stack from '@mui/material/Stack';

import { Pattern } from './Pattern';
import PlanItem from './PlanItem';
import DeployButtons from './DeployButtons';

interface PlanItemsProps {
    configuration : Pattern[];
    remove : (value : Pattern) => void;
    select : (value : Pattern) => void;
    selection : Pattern | null;
    deploy : (value : string) => void;
    patterns : Pattern[];
}

const PlanItems : React.FC<PlanItemsProps> =
    ({ configuration, remove, select, selection, deploy}) =>
{

    if (configuration.length == 0) return (
        <div className="card plan-items">
            <h2>Get started</h2>
            <p>
                This is an empty configuraton. To get started you should start
                add the configuration patterns below.  Start
                by adding a Pub/sub foundation.  There aren't any useful
                configurations which don't have a pub/sub foundation to
                inter-connect all the processes.  We use Apache Pulsar, the
                highly scalable, fault-tolerant pub/sub system.
            </p>
            <p>
                Once that's done, add Trustgraph processing core.  This
                deploys a common set of standard processes.
            </p>
        </div>
    );

    return (
        <div className="card plan-items">

            <h2>Your configuration patterns</h2>

            <Stack spacing={1}>
                {
                    configuration.map((p) => (
                        <PlanItem
                            key={p.pattern.name}
                            pattern={p}
                            select={select}
                            remove={remove}
                            selected={selection == p ? true : false}
                        />
                    ))
                }

               <Stack direction="row" spacing={2}>
                   <DeployButtons deploy={deploy}/>
               </Stack>

           </Stack>

        </div>
    );

}

export default PlanItems;


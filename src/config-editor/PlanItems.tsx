
import React from 'react';

import { Pattern } from './Pattern';

interface PlanItemsProps {
    configuration : Pattern[];
    remove : (value : Pattern) => void;
    select : (value : Pattern) => void;
    selection : Pattern | null;
    deploy : () => void;
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

                {
                    configuration.map((n : Pattern) => (
                        <div key={n.pattern.name}
                            className={(n == selection) ? "plan-item selection" : "plan-item"}
                            >
                            <div>{n.pattern.icon} {n.pattern.title}</div>
                            <div>
                                <button onClick={() => select(n)}>
                                    parameters
                                </button>
                                <button onClick={() => remove(n)}>
                                    remove
                                </button>
                            </div>
                            <div></div>
                        </div>
                    ))
                }

           <div>
               <button onClick={() => deploy()}>
                   Create deployable configuration
               </button>
           </div>

        </div>
    );

}

export default PlanItems;


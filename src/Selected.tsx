
import ItemEditor from './ItemEditor';

function Selection({configuration, remove, select, selected, patterns}) {

    if (configuration.length == 0) return (
        <div className="card">
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
        <div className="card">

            <h2>Your configuration patterns</h2>

            <div className="selection-box configuration">

                {
                    configuration.map(n => (
                        <div key={n.pattern.name}
                            className={(n == selected) ? "selection-field selected" : "selection-field"}
                            >
                            <div>{n.pattern.title}</div>
                            <div>
                                <button onClick={() => select(n)}>
                                    info
                                </button>
                                <button onClick={() => remove(n)}>
                                    remove
                                </button>
                            </div>
                            <div></div>
                        </div>
                    ))
                }

            </div>

        </div>
    );

}

export default Selection;


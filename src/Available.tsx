
function Available({
    available, unavailable, add, select, selection, patterns
}) {

    let featureMap = new Map<string, any>();

    patterns.map(p =>
        p.pattern.features.map(
            f => {
                featureMap.set(f, p.pattern.title);
            }
        )
    );

    if (available.length == 0 && unavailable.length == 0) return null;

    return (
        <div className="card">

            <h2>Available configuration patterns</h2>

            <div className="selection-box available">

                {
                    available.map(n => (
                        <div
                            className="selection-field available"
                            key={n.pattern.name}
                        >
                            <div>{n.pattern.title}</div>
                            <div>
                                <button onClick={() => select(n)}>
                                    info
                                </button>
				<button onClick={() => add(n.pattern.name)}>
				    add
				</button>
			    </div>
			    <div></div>
                        </div>
                    ))
                }

                {
                    unavailable.map(n => (
                        <div
                            className="selection-field unavailable"
                            key={n.pattern.name}
                        >
                            <div>{n.pattern.title}</div>
			    <div>
                                <button onClick={() => select(n)}>
                                    info
                                </button>
			    </div>
                            <div>
                            {

                                n.pattern.requires.map(
                                    p => (
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

export default Available;


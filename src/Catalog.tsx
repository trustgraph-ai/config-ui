
function Available({
    available, unavailable, add, patterns
} : any) {

    let featureMap = new Map<string, any>();

    patterns.map(
        (p : any) =>
            p.pattern.features.map(
                (f : any) => {
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
                    available.map((n : any) => (
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
                    unavailable.map((n : any) => (
                        <div
                            className="catalog-item unavailable"
                            key={n.pattern.name}
                        >
                            <div className="title">{n.pattern.icon} {n.pattern.title}</div>
                            <div className="description">{n.pattern.description}</div>
                            <div className="additional">
                            {

                                n.pattern.requires.map(
                                    (p : any) => (
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



function Selection({selected, remove, itemSelected, setItemSelected}) {

    if (selected.length == 0) return null;

    return (
        <div className="card">

            <h2>Selected</h2>

            <div className="selection-box">

                {
                    selected.map(n => (
                        <div key={n.pattern.name}
                            className={(n == itemSelected) ? "selection-field selected" : "selection-field"}
                            >
                            <div>{n.pattern.title}</div>
                            <button onClick={() => setItemSelected(n)}>
                                details
                            </button>
                            <button onClick={() => remove(n)}>
                                remove
                            </button>
                        </div>
                    ))
                }

            </div>

        </div>
    );

}

export default Selection;


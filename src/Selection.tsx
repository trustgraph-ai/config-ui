
import Available from './Available';
import Selected from './Selected';
import ItemEditor from './ItemEditor';

function Selection({
    available, unavailable, configuration, add, remove, selection, select,
    patterns
}) {

    return (
        <div className="section">

            <Selected
                configuration={configuration}
                remove={remove}
                select={select}
                selection={selection}
                patterns={patterns}
            />
{/*
            <Available
                available={available}
                unavailable={unavailable}
                add={add}
                select={select}
                selection={selection}
                patterns={patterns}
            />
            */
            }
                <ItemEditor
                    configuration={configuration}
                    selection={selection}
                    select={select}
                    patterns={patterns}
                />

        </div>
    );

}

export default Selection;


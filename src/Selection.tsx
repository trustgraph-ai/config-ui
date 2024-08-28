
import Available from './Available';
import Selected from './Selected';

function Selection({
    available, unavailable, selected, add, remove, itemSelected,
    setItemSelected
}) {

    return (
        <div className="section">

            <Selected
                selected={selected}
                remove={remove}
                setItemSelected={setItemSelected}
                itemSelected={itemSelected}
            />

            <Available
                available={available}
                unavailable={unavailable}
                add={add}
            />

        </div>
    );

}

export default Selection;


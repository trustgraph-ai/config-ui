
import Available from './Available';
import Selected from './Selected';

function Items({itemSelected}) {

    if (!itemSelected) return;

    return itemSelected.pattern.args.map(
        field => (
            <>
                <h2>{itemSelected.pattern.title}</h2>

                <div key={field.name}>
                      <div>{field.description}</div>
                      <div>
                          <textarea defaultValue={field.default}/>
                      </div>
                  </div>
            </>
        )
    );
}

function Selection({itemSelected, setItemSelected}) {


    return (
        <div className="card item-editor">

          <Items
              itemSelected={itemSelected}
          />
        </div>
    );

}

export default Selection;


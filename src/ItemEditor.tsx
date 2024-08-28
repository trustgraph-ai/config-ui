
import Available from './Available';
import Selected from './Selected';

function Args({selection}) {

    return selection.pattern.args.map(
        field => 
            <div key={field.name}>
                <div>{field.description}</div>
                <div>
                    <textarea defaultValue={field.default}/>
                </div>
            </div>
    );

}

function Items({selection, inConfig}) {

    if (!selection) return;

    return (
        <>
            <h2>{selection.pattern.title}</h2>
            <p>{selection.pattern.description}</p>
            { (inConfig) ? ( <Args selection={selection}/> ) : null }
        </>
        
    );

}

function Selection({selection, select, patterns, configuration}) {

    const patternsInConfig = new Set<string>(configuration);

    const inConfig = patternsInConfig.has(selection);

    return (
        <div className="card item-editor">

          <Items
              selection={selection}
              inConfig={inConfig}
          />

        </div>
    );

}

export default Selection;


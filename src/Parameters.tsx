
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

function ItemParameters({selection, select, patterns, configuration}) {

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

function Parameters({selection, select, patterns, configuration, deployment}) {

    if (deployment)
        return (
            <div className="card item-editor">
                <h2>Deployment configuration</h2>
                <pre>{deployment}</pre>
            </div>
        );
    
    return (
        ItemParameters({
            selection, select, patterns, configuration, deployment
        })
    );

}

export default Parameters;


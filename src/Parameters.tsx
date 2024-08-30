
function change(
    pattern : any,
    field : any,
    value : any,
    parameters : any,
    setParameters : any,
) {
    const newParams = {
       ...parameters,
       [pattern]: {
           ...parameters[pattern],
           [field]: value,
       }
    };
    setParameters(newParams);
}

function Args({selection, parameters, setParameters} : any) {

    return selection.pattern.args.map(
        (field : any) => 
            <div key={selection.pattern.name + "//" + field.name}>
                <div>{field.description}</div>
                <div>{selection.pattern.name}</div>
                <div>{field.name}</div>
                <div>
                    <textarea
                        defaultValue={parameters[selection.pattern.name][field.name]}
                        onChange={e => change(selection.pattern.name, field.name, e.target.value, parameters, setParameters)}
                    />
                </div>
            </div>
    );

}

function ItemParameters({
    selection, configuration, parameters, setParameters,
} : any) {

    if (!selection) return;

    const patternsInConfig = new Set<string>(configuration);

    if (!(selection.pattern.name in parameters)) {
        parameters = {
            ...parameters,
            [selection.pattern.name]: {}
        };
    }

    let sparams = parameters[selection.pattern.name];

    selection.pattern.args.map(
        (field : any) => {
            if (!(field.name in sparams))
                sparams[field.name] = field.default;
        }
    );

    const inConfig = patternsInConfig.has(selection);

    return (
        <>
            <h2>{selection.pattern.title}</h2>
            <p>{selection.pattern.description}</p>
            { (inConfig) ? ( <Args selection={selection} parameters={parameters} setParameters={setParameters}/> ) : null }
        </>
        
    );

}

function Parameters({
    selection, configuration, deployment,
    parameters, setParameters,
} : any) {

    if (deployment)
        return (
            <div className="card item-editor">
                <h2>Deployment configuration</h2>
                <textarea value={deployment} readOnly={true}/>
            </div>
        );

    return (

        <div className="card item-editor">

        <ItemParameters
            selection={selection}
            configuration={configuration}
            parameters={parameters}
            setParameters={setParameters}
            />

        </div>
        
    );

}

export default Parameters;


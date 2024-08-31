
import React from 'react';

import { Pattern } from './Pattern';

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

interface ArgsProps {
    selection : Pattern;
    parameters : any;
    setParameters : any;
};

const Args : React.FC<ArgsProps> =
    ({ selection, parameters, setParameters }) => 
{

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

interface ItemParametersProps {
    selection : any;
    configuration : any;
    parameters : any;
    setParameters : any;
};

const ItemParameters : React.FC<ItemParametersProps> = 
    ({ selection, configuration, parameters, setParameters }) =>
{

 // FIXME: Shouldn't happen?
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

interface ParametersProps {
    selection : any;
    configuration : any;
    deployment : string | null;
    parameters : any;
    setParameters : any;
};

const Parameters : React.FC<ParametersProps> =
    ({ selection, configuration, deployment, parameters, setParameters }) =>
{    

    if (deployment)
        return (
            <div className="card deployment-config">
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


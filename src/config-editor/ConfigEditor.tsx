
import { useState } from 'react';
import './ConfigEditor.scss';
import Plan from './Plan';
import Catalog from './Catalog';
import patterns from './patterns.json';
import { generateDeployment } from './deployment';
import { Pattern, Arg } from './Pattern';

// Workaround to make isSubsetOf work
declare global {
    interface Set<T> {
        isSubsetOf<T>(other: ReadonlySet<unknown>): boolean
    }
}

function dependenciesMet(pattern : Pattern, features : Set<string>) {

    if (pattern.pattern.requires.length == 0) return true;

    if (new Set(pattern.pattern.requires).isSubsetOf(features))
        return true;

    return false;

}

function featuresMet(
    selected : Pattern[],
) {
    return new Set<string>(
        selected.flatMap(x => x.pattern.features)
    );
}

function ConfigEditor() {

    const [configuration, setConfiguration] = useState<Pattern[]>([]);
    const [selection, setSelection] = useState<Pattern | null>(null);
    const [deployment, setDeployment] = useState<string | null>(null);
    const [parameters, setParameters] = useState<any>({});

    const patternMap = new Map<string, any>(
	patterns.map(obj => [obj.pattern.name, obj])
    );

    const configurationFeatures = featuresMet(configuration);

    const available = patterns.filter(
        (x : any) => dependenciesMet(x, configurationFeatures)
    ).filter(
	(x : any) => ! (new Set(configuration).has(x))
    );

    const unavailable = patterns.filter(
        (x : any) => ! dependenciesMet(x, configurationFeatures)
    ).filter(
	(x : any) => ! (new Set(configuration).has(x))
    );

    function select(pattern : Pattern) {
        setSelection(pattern);
        setDeployment(null);
    }

    function deploy() {

        generateDeployment({
            patterns, configuration, parameters
        }).then(
            (depl : string) => {
                setDeployment(depl);
                setSelection(null);
            }
        ).catch(
            (err : any) => console.log("Error:", err)
        );

    }

    function add(x : string) {

        const pattern = patternMap.get(x);
        const name = pattern.pattern.name;
        if (!(name in parameters)) {
            let sparams : any = {};
            pattern.pattern.args.map(
                (field : Arg) => {
                    if (field.default)
                        sparams[field.name] = field.default;
                    else
                        sparams[field.name] = "";
                }
            );
            parameters[name] = sparams;
        }

        setParameters(parameters);
        setConfiguration([...configuration, patternMap.get(x)]);
        setDeployment(null);
    }

    function remove(x : Pattern) {
        let cfg = configuration.filter(y => !(y == x));

        while(true) {
            let features = featuresMet(cfg);
            let update = cfg.filter(
                y => dependenciesMet(y, features)
            );
            if (update.length == cfg.length) break;
            cfg = update;
        }

        setSelection(null);
        setConfiguration(cfg);
        setDeployment(null);

    }

    return (
        <>
            <div className="config-editor">

                <h1>Config editor</h1>

                <Plan
                    configuration={configuration}
                    remove={remove}
                    selection={selection}
                    select={select}
                    patterns={patterns}
                    deploy={deploy}
                    deployment={deployment}
                    parameters={parameters}
                    setParameters={setParameters}
                />

                <Catalog
                    available={available}
                    unavailable={unavailable}
                    add={add}
                    patterns={patterns}
                />

            </div>
        </>
  )
}

export default ConfigEditor;


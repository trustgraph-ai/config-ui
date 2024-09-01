
import { useState } from 'react';

import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import './ConfigEditor.scss';
import Plan from './Plan';
import Catalog from './Catalog';
import { Pattern, ParameterSet, PatternParameters, ParameterValue, ParameterDefinition } from './Pattern';
import { generateDeployment } from './deployment';
import { changeParam } from './change-param';
import patternsUntyped from './patterns.json';

const patterns = (patternsUntyped as Pattern[]);

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
    const [parameters, setParameters] = useState<ParameterSet>(new Map());
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const patternMap : Map<string, Pattern> = new Map(
	patterns.map(obj => [obj.pattern.name, obj])
    );

    const configurationFeatures = featuresMet(configuration);

    const available = patterns.filter(
        (x) => dependenciesMet(x, configurationFeatures)
    ).filter(
	(x) => ! (new Set(configuration).has(x))
    );

    const unavailable = patterns.filter(
        (x) => ! dependenciesMet(x, configurationFeatures)
    ).filter(
	(x) => ! (new Set(configuration).has(x))
    );

    function select(pattern : Pattern) {
        setSelection(pattern);
        setDeployment(null);
    }

    function setParameter(
        pattern : Pattern,
        field : ParameterDefinition,
        value : ParameterValue) {

        changeParam(
            pattern.pattern.name, field.name, value,
            parameters, setParameters
        );

    }

    function deploy(kind : string) {

        generateDeployment(
            configuration, parameters, kind
        ).then(
            (depl : string) => {
                setDeployment(depl);
                setSelection(null);
            }
        ).catch(
            (err) => {
                console.log("Error:", err);
                handleError(err);
            }
        );

    }

    function handleError(error : string) {
        setErrorMessage(error);
    }

    function closeError(
        _event: Event | React.SyntheticEvent<Element, Event>,
        reason : SnackbarCloseReason
    ) {
        if (reason === "clickaway") return;
        setErrorMessage(null);
    }    

    function add(x : string) {

        const pattern = patternMap.get(x);

        if (!pattern) {
            console.log("Unknown pattern", x);
            return;
        }

        const name = pattern.pattern.name;

        if (!(name in parameters)) {

            let pparams : PatternParameters = new Map();

            pattern.pattern.args.map(
                (field : ParameterDefinition) => {
                    if (field.default)
                        pparams.set(field.name, field.default);
                    else
                        pparams.set(field.name, "");
                }
            );

            parameters.set(name, pparams);

        }

        setParameters(parameters);
        setConfiguration([...configuration, pattern]);
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
                    setParameter={setParameter}
                />

                <Catalog
                    available={available}
                    unavailable={unavailable}
                    add={add}
                />

            </div>

      <Snackbar
        open={errorMessage != null}
        autoHideDuration={6000}
        onClose={closeError}
        message={errorMessage}
        action={
            <>
                <Button
                    size="small"
                    onClick={() => setErrorMessage(null)}
                >
                    Close
                </Button>
            </>
        }
      />            

        </>
  )
}

export default ConfigEditor;


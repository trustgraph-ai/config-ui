
import {
    ParameterSet, ParameterValue, PatternParameters
} from './Pattern';

export function changeParam(
    pattern : string,
    field : string,
    value : ParameterValue,
    parameters : ParameterSet,
    setParameters : (value : ParameterSet) => void,
) {

    const newParams : ParameterSet = new Map();

    for (let [patternName, pparams] of parameters) {
        let newPparams : PatternParameters = new Map();
        for (let [name, value] of pparams) {
            newPparams.set(name, value);
        }
        newParams.set(patternName, newPparams);
    }

    if (!newParams.has(pattern)) {
        newParams.set(pattern, new Map<string, ParameterValue>());
    }

    newParams.get(pattern)!.set(field, value);

    setParameters(newParams);

}


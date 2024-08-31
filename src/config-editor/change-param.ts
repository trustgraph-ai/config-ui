
export function changeParam(
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

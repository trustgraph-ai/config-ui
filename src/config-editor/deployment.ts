
import { Patterns, ParameterSet } from './Pattern';

export function toObject(
    configuration : Pattern[],
    parameters : ParameterSet
) {

    return configuration.map(
        (item) => {

            const params = Object.fromEntries(
                parameters.get(item.pattern.name)!
            );

            return {
                name: item.pattern.name,
                module: item.module,
                parameters: params,
            };

        }
    );

}

export function toJson(
    patterns : Pattern[],
    configuration : Pattern[],
    parameters : ParameterSet
) {

    const obj = toObject(configuration, parameters);
    return JSON.stringify(obj, null, 4);

}

export function generateDeployment(
    patterns : Pattern[],
    configuration : Pattern[],
    parameters : ParameterSet
) {

    let config = toJson(patterns, configuration, parameters);

    return fetch(
        "/api/generate", {
            body: config,
            method: "POST",
            headers: {
            }
        }
    ).then(
        x => x.text()
    );
    
}


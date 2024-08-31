
import { Pattern, ParameterSet } from './Pattern';

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
    configuration : Pattern[],
    parameters : ParameterSet
) {

    const obj = toObject(configuration, parameters);
    return JSON.stringify(obj, null, 4);

}

export function generateDeployment(
    configuration : Pattern[],
    parameters : ParameterSet,
    kind : string,
) : Promise <string> {

    if (kind == "k8s") {
        return new Promise((_resolve, reject) => {
            reject("Not implemented.");
        });
    }

    let config = toJson(configuration, parameters);

    if (kind == "json") {
        return new Promise((resolve, _reject) => {
            resolve(config);
        });
    }

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


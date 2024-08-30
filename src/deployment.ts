
export function toObject({configuration, parameters} : any) {

    return configuration.map(
        (item : any) => {
            return {
                name: item.pattern.name,
                module: item.module,
                parameters: parameters[item.pattern.name]
            };
        }
    );

}

export function toJson({patterns, configuration, parameters} : any) {

    const obj = toObject({patterns, configuration, parameters});
    console.log("OBJ:", obj);

    return JSON.stringify(obj, null, 4);

}

export function generateDeployment({
    patterns, configuration, parameters
} : any) {

    let config = toJson({patterns, configuration, parameters});

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


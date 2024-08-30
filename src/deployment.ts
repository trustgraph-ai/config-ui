
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
    return JSON.stringify(obj, null, 4);

}

export function generateDeployment({
    patterns, configuration, parameters
} : any) {
    return toJson({patterns, configuration, parameters});
}


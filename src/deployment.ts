
export function toObject({patterns, configuration, parameters}) {

    return configuration.map(
        item => {
            return {
                name: item.pattern.name,
                module: item.module,
                parameters: parameters[item.pattern.name]
            };
        }
    );

}

export function toJson({patterns, configuration, parameters}) {

    const obj = toObject({patterns, configuration, parameters});
    return JSON.stringify(obj, null, 4);

}

export function generateDeployment({patterns, configuration, parameters}) {
    return toJson({patterns, configuration, parameters});
}


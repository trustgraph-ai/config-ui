
export function generateDeployment({patterns, configuration, parameters}) {

    let depl = "";

    for (let item of configuration) {

        const name = item.pattern.name;
        const import_name = name.replace(/-/g, "_");
        const module = item.module;

        depl += `local ${import_name} = import "${module}";`
        depl += "\n";

    }

    depl += "\n"

    let first = true;

    for (let item of configuration) {

        const name = item.pattern.name;
        const import_name = name.replace(/-/g, "_");

        if (first) {
          depl += `${import_name}`;
          first = false;
        } else {
          depl += " + \n";
          depl += `  ${import_name}`;
        }

        if (name in parameters) {
            Object.entries(parameters[name]).forEach(
                ([p, v]) => {

                    v = v.replace(/\n/g, "\\n");
                    v = v.replace(/"/g, "\\\"");

                    depl += `\n    .with("${p}", "${v}")`;

                }
            );
        }
    }

    depl += ";\n";

    return depl;

}


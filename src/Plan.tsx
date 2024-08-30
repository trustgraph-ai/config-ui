
import PlanItems from './PlanItems';
import Parameters from './Parameters';

function Plan({
    configuration, remove, selection, select, patterns, deploy, deployment,
    parameters, setParameters
} : any) {

    return (
        <div className="section plan">

            <PlanItems
                configuration={configuration}
                remove={remove}
                select={select}
                selection={selection}
                patterns={patterns}
                deploy={deploy}
            />

            <Parameters
                configuration={configuration}
                selection={selection}
                select={select}
                patterns={patterns}
                deployment={deployment}
                parameters={parameters}
                setParameters={setParameters}
            />

        </div>

    );

}

export default Plan;


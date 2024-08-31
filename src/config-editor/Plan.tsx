
import { Pattern, ParameterSet } from './Pattern';
import PlanItems from './PlanItems';
import Parameters from './Parameters';

interface PlanProps {
    configuration : Pattern[];
    remove : (value : Pattern) => void;
    selection : Pattern | null;
    select : (value : Pattern) => void;
    patterns : Pattern[]
    deploy : () => void;
    deployment : string | null;
    parameters : ParameterSet;
    setParameters : (value : ParameterSet) => void;
}

const Plan : React.FC<PlanProps> =
    ({ configuration, remove, selection, select, patterns, deploy,
       deployment, parameters, setParameters }) => 
{

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
                deployment={deployment}
                parameters={parameters}
                setParameters={setParameters}
            />

        </div>

    );

}

export default Plan;



import {
    Pattern, ParameterSet, ParameterDefinition, ParameterValue
} from './Pattern';
import PlanItems from './PlanItems';
import Parameters from './Parameters';

interface PlanProps {
    configuration : Pattern[];
    remove : (value : Pattern) => void;
    selection : Pattern | null;
    select : (value : Pattern) => void;
    patterns : Pattern[]
    deploy : (kind : string) => void;
    deployment : string | null;
    parameters : ParameterSet;
    setParameter : (
        pattern : Pattern, field : ParameterDefinition,
        value : ParameterValue
    ) => void;
}

const Plan : React.FC<PlanProps> =
    ({ configuration, remove, selection, select, patterns, deploy,
       deployment, parameters, setParameter }) => 
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
                selection={selection}
                deployment={deployment}
                parameters={parameters}
                setParameter={setParameter}
            />

        </div>

    );

}

export default Plan;


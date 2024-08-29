
import PlanItems from './PlanItems';
import Parameters from './Parameters';

function Plan({
    available, unavailable, configuration, add, remove, selection, select,
    patterns
}) {

    return (
        <div className="section plan">

            <PlanItems
                configuration={configuration}
                remove={remove}
                select={select}
                selection={selection}
                patterns={patterns}
            />

            <Parameters
                configuration={configuration}
                selection={selection}
                select={select}
                patterns={patterns}
            />

        </div>
    );

}

export default Plan;


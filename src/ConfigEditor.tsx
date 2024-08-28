import { useState } from 'react';
import './ConfigEditor.scss';
import Selection from './Selection';
import ItemEditor from './ItemEditor';
import patterns from './patterns.json';

function dependenciesMet(pattern, features) {

    if (pattern.pattern.requires == []) return true;

    if (new Set(pattern.pattern.requires).isSubsetOf(features))
        return true;

    return false;

}

function featuresMet(selected, patternMap) {
    return new Set<string>(
        selected.flatMap(x => x.pattern.features)
    );
}

function ConfigEditor() {

//    const [selected, setSelected] = useState([patterns[0], patterns[1], patterns[4]]);
//    const [itemSelected, setItemSelected] = useState(patterns[4]);
    const [selected, setSelected] = useState([]);
    const [itemSelected, setItemSelected] = useState(null);

    const patternMap = new Map<string, any>(
	patterns.map(obj => [obj.pattern.name, obj])
    );

    const selectedFeatures = featuresMet(selected, patternMap);

    const available = patterns.filter(
        x => dependenciesMet(x, selectedFeatures)
    ).filter(
	x => ! (new Set(selected).has(x))
    );

    const unavailable = patterns.filter(
        x => ! dependenciesMet(x, selectedFeatures)
    ).filter(
	x => ! (new Set(selected).has(x))
    );

    function add(x) {
        setSelected([...selected, patternMap.get(x)]);
    }

    function remove(x) {
        let sel = selected.filter(y => !(y == x));

        while(true) {
            let features = featuresMet(sel, patternMap);
            let updSel = sel.filter(
                y => dependenciesMet(y, features)
            );
            if (updSel.length == sel.length) break;
            sel = updSel;
        }

        setItemSelected(null);
        setSelected(sel);
    }

    return (
        <>
            <h1>Config editor</h1>
            <div className="config-editor">
                <Selection
                    available={available} unavailable={unavailable}
                    selected={selected}
                    add={add}
                    remove={remove}
                    itemSelected={itemSelected}
                    setItemSelected={setItemSelected}
                />	     
                <ItemEditor
                    itemSelected={itemSelected}
                    setItemSelected={setItemSelected}
                />
            </div>
        </>
  )
}

export default ConfigEditor;


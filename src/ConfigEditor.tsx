
import { useState } from 'react';
import './ConfigEditor.scss';
import Plan from './Plan';
import Catalog from './Catalog';
import rawPatterns from './patterns.json';

// 🤖⛭
//

const icons = {
    "trustgraph-base": "🤝😂",
    "pulsar": "🌟☄️",
    "azure": "🤖💬",
    "bedrock": "🤖💬",
    "cohere": "🤖💬",
    "claude": "🤖💬",
    "ollama": "🤖💬",
    "openai": "🤖💬",
    "vertexai": "🤖💬",
    "vector-store-milvus": "❓🌐",
    "vector-store-qdrant": "❓🌐",
    "graph-rag-cassandra": "🖇️🙋‍♀️",
    "graph-rag-neo4j": "🖇️🙋‍♀️",
    "kq-query-prompt": "📜️️💬",
    "extraction-definition-prompt": "📜️️💬",
    "extraction-relationship-prompt": "📜️️💬",
    "prompt-template-document-query": "📜️💬",
    "prompt-template-rows-template": "📜️💬",
    "override-recursive-chunker": "✂️🪚",
    "pulsar-manager": "🕴🏻🛃",
};

const patterns = rawPatterns.map(
    p => {

        if (p.pattern.name in icons) {
            return {
                ...p,
                pattern: {
                   ...p.pattern,
                   title: icons[p.pattern.name] + " " + p.pattern.title,
                }
            }
        }

        return p;
    }
)

console.log(patterns);

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

    const [configuration, setConfiguration] = useState([]);
    const [selection, setSelection] = useState(null);

    const patternMap = new Map<string, any>(
	patterns.map(obj => [obj.pattern.name, obj])
    );

    const configurationFeatures = featuresMet(configuration, patternMap);

    const available = patterns.filter(
        x => dependenciesMet(x, configurationFeatures)
    ).filter(
	x => ! (new Set(configuration).has(x))
    );

    const unavailable = patterns.filter(
        x => ! dependenciesMet(x, configurationFeatures)
    ).filter(
	x => ! (new Set(configuration).has(x))
    );

    function select(pattern) {
        setSelection(pattern);
    }

    function add(x) {
        setConfiguration([...configuration, patternMap.get(x)]);
    }

    function remove(x) {
        let cfg = configuration.filter(y => !(y == x));

        while(true) {
            let features = featuresMet(cfg, patternMap);
            let update = cfg.filter(
                y => dependenciesMet(y, features)
            );
            if (update.length == cfg.length) break;
            cfg = update;
        }

        setSelection(null);
        setConfiguration(cfg);

    }

    return (
        <>
            <h1>Config editor</h1>
            <div className="config-editor">

                <Plan
                    available={available} unavailable={unavailable}
                    configuration={configuration}
                    add={add}
                    remove={remove}
                    selection={selection}
                    select={select}
                    patterns={patterns}
                />	     

                <Catalog
                    available={available}
                    unavailable={unavailable}
                    add={add}
                    select={select}
                    selection={selection}
                    patterns={patterns}
                />

            </div>
        </>
  )
}

export default ConfigEditor;


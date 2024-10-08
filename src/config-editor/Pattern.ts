
export interface ParameterDefinition {
    default : string | number;
    description : string;
    name : string;
    label : string;
    required : Boolean;
    type : string;
    size? : number;
    width? : number;
    rows? : number;
    min? : number;
    max? : number;
    step? : number;
    options? : { id : string, description : string }[];
};

export interface PatternMetadata {
    name : string;
    title : string;
    description : string;
    icon : string;
    category : string[];

    features : string[];
    requires : string[];

    args : ParameterDefinition[];

};

export interface Pattern {
    pattern : PatternMetadata;
    module : string;
};

export type ParameterValue = string | number;
export type PatternParameters = Map<string,ParameterValue>;
export type ParameterSet = Map<string,PatternParameters>;


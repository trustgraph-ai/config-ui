
export interface Arg {
    default : string | number;
    description : string;
    name : string;
    required? : Boolean;
    type : string;
    width? : number;
};

export interface PatternMetadata {
    name : string;
    title : string;
    description : string;
    icon : string;

    features : string[];
    requires : string[];

    args : Arg[];

};

export interface Pattern {
    pattern : PatternMetadata;
    module : string;
};

export type ParameterValue = string | number;
export type PatternParameters = Map<string,ParameterValue>;
export type ParameterSet = Map<string,PatternParameters>;


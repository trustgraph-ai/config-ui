
export interface Arg {
    default : string;
    description : string;
    name : string;
    required? : Boolean;
    type : string;
    width : number;
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

export type PatternParameters = Map<string,string>;

export type ParameterSettings = Map<string, PatternParameters>;
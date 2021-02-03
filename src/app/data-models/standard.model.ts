export interface Checklist {
    checklist_id?: string,
    checklist: string,
    // answer_options: string[],
    // alternative_checklist: boolean
}


export interface Standard {
    _id?: string,
    name: string,
    version: string,
    year: string,
    domains: string[]
    controls: string[]
}


export interface Control {
    _id?: string,                    // db id
    standard_id: string,
    isDomain: boolean,
    cid: string,                    // control id
    direct_root?: string,           // id of root (if that object is direct child of domain then it is domain id)
    // ancestors?: string[],           // ids up to domain
    direct_childs?: string[],       // array of ids
    // all_childs?: string[],          // controls which under this control
    info: ControlInfo,
    checklists?: Checklist[]
}

export interface ControlInfo {
    title: string
    // guedline, mandotory, level/architecture vs buraya
}

export interface Guideline {
    standard_id: string,
    control_id: string,
    guideline_title: string,
    guideline_item: string,
}

export interface Threat {
    standard_id: string,
    control_id: string,
    threats: string,
}

export interface RiskDriver {
    standard_id: string,
    control_id: string,
    risk_driver: string,
}
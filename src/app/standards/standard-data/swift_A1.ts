interface control {
    "id": string,
    "title": string,
    "checklists": string[]
}

interface domain {
    "id": string,
    "title": string,
    "control_ids": string[]
}

export interface general_standard_model {
    standard_name: string,
    domains: domain[],
    controls: control[]
}


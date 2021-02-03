import { Company } from './company.model';
import { Auditor } from './auditor.model';


export interface Project {
    _id?: string,
    project_title: string
    standard: string,
    company: Company,
    auditors: string[],
    entries?: string[]
}


export interface Entry {
    _id?: string,
    timestamp: Date,
    project_id: string
    control_id: string,

    control_decision?: { decision: string, details?: string }
    checklist_answers: { checklist_id: string, answer: string, details?: string }[],
    attachements?: string[]
}


// interface Analysis{
//     entries: Entry[]
// }


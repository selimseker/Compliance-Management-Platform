import { Project } from './project.model';


export interface Auditor {
    _id?: string,
    first_name: string,
    second_name: string,
    email: string,
    phone_number: string,
    bio: string,
    supervisor: string,
    standards: string[],
    projects?: string[]
}
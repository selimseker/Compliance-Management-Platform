import { Project } from './project.model';

export interface Company {
    _id?: string,
    name: string,
    email: string,
    phone_number: string,
    industry: string,
    bio: string,
    projects: Project[]
}
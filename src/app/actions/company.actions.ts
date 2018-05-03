import { Company } from "../models/company";

export const LOAD_COMPANIES = 'LOAD_COMPANIES;'
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS;'

export const DELETE_COMPANY = 'DELETE_COMPANIY;'
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANIY_SUCCESS;'

export const SELECT_COMPANY = 'SELECT_COMPANIY;'

export class LoadCompaniesAction {
    readonly type = LOAD_COMPANIES;
    constructor(public payload: any = null) {}
}

export class LoadCompaniessSuccessAction {
    readonly type = LOAD_COMPANIES_SUCCESS;
    constructor(public payload: Company[]) {}
}

export class DeleteCompanyAction {
    readonly type = DELETE_COMPANY;
    constructor(public payload: number) {}
}

export class DeleteCompanySuccessAction {
    readonly type = DELETE_COMPANY_SUCCESS;
    constructor(public payload: number) {}
}

export class SelectCompanyAction {
    readonly type = SELECT_COMPANY;
    constructor(public payload: Company) {}
}



export type Action = 
LoadCompaniesAction | 
LoadCompaniessSuccessAction |
DeleteCompanyAction |
DeleteCompanySuccessAction;


export type SelectedAction = SelectCompanyAction;
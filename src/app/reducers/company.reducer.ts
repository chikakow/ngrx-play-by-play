import * as companyActions from './../actions/company.actions';
import { AppState } from '../models/app-state';

// state can be object with selectedCompany, companies: [] etc. but for here it is just simple company[]
export function companyReducer(state = [], action: companyActions.Action) {
    switch (action.type) {
        case companyActions.LOAD_COMPANIES_SUCCESS: {
            return action.payload; 
        }
        case companyActions.DELETE_COMPANY_SUCCESS: {
            return state.filter(company => company.id !== action.payload);
        }
        default: {
            return state;
        }
    }
}

export function selectedCompanyReducer(state = null, action: companyActions.SelectedAction) {
    switch (action.type) {
        case companyActions.SELECT_COMPANY: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
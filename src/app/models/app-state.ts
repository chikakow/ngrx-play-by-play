import { Company } from "./company";

export interface AppState {
    companies: Company[];
    selectedCompany: Company;
}

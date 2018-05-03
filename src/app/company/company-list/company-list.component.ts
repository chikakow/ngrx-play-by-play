import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as companyActions from '../../actions/company.actions';
import { AppState } from '../../models/app-state';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;
  selectedCompany$: Observable<Company>;
  selectedCompany: Company;
  
  constructor(private store: Store<AppState>) { 
    this.companies$ = this.store.select(state => state.companies);
    this.selectedCompany$ = this.store.select(state => state.selectedCompany);
  }
  
  ngOnInit() {
    this.getCompanies()
  }
  
  getCompanies(): any {
    this.store.dispatch(new companyActions.LoadCompaniesAction())
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId))
  }

  selectCompany(company) {
    this.store.dispatch(new companyActions.SelectCompanyAction(company))
  }

  selectedCompanyChange(company: Company) {
    console.log('company', company);
    this.selectedCompany = company;
  }
}

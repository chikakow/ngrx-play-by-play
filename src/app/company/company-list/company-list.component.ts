import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as companyActions from '../../actions/company.actions';
import { AppState } from '../../models/app-state';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;
  
  constructor(private store: Store<AppState>) { 
    this.companies$ = this.store.select(state => state.companies);
  }
  
  ngOnInit() {
    this.getCompanies()
  }
  
  getCompanies(): any {
    this.store.dispatch(new companyActions.LoadCompaniesAction())
  }

  deleteCompanies(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId))
  }

  checkCompany(company) {
    console.log('company', company);
    this.store.dispatch(new companyActions.SelectCompanyAction(company))
  }
}

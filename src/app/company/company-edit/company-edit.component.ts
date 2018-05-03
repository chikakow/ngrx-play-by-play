import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/app-state';
import { Observable } from 'rxjs/Observable';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  selectedCompany$: Observable<Company>;

  constructor(private store: Store<AppState>) { 
    this.selectedCompany$ = this.store.select(state => state.selectedCompany);
  }

  ngOnInit() {
  }

}

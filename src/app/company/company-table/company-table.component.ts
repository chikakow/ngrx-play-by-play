import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  @Input() companies: Company[];
  @Output() deleteCompany: EventEmitter<number> = new EventEmitter<number>(); 
  @Output() selectCompany: EventEmitter<Company> = new EventEmitter<Company>();  
  constructor() { }

  ngOnInit() {
  }

  deleteCompanyClick(companyId) {
    this.deleteCompany.emit(companyId);
  }

  selectCompanyClick(company) {
    this.selectCompany.emit(company);
  }

}

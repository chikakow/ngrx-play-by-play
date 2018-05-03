import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppState } from '../../models/app-state';
import { Company } from '../../models/company';
import { takeWhile, debounceTime, skip } from 'rxjs/operators';



@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit, OnChanges {

  @Input() company: Company;
  @Output() selectedCompanyChange: EventEmitter<Company> = new EventEmitter<Company>();

  companyForm: FormGroup;

  private alive = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['company'] && changes['company'].currentValue) {
      this.companyForm.patchValue(this.company);
    }
  }

  private buildForm() {

    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: [''],
      phone: ['']
    });

    this.companyForm.valueChanges
    .pipe(
      takeWhile(() => this.alive), 
      skip(1), 
      debounceTime(500)
    )
    .subscribe(value => {
      if(!this.companyForm.valid) {
        return;
      }
      this.selectedCompanyChange.emit(value);
    });
  }

}

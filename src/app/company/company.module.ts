import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { CompanyService } from '../company.service';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyTableComponent } from './company-table/company-table.component';

const companyRoutes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      {
        path: 'list',
        component: CompanyListComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(companyRoutes)
  ],
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyEditComponent,
    CompanyTableComponent
  ],
  providers: [CompanyService]
})
export class CompanyModule { }

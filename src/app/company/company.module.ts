import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { CompanyService } from '../company.service';
import { CompanyEditComponent } from './company-edit/company-edit.component';

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
    RouterModule.forChild(companyRoutes)
  ],
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyEditComponent
  ],
  providers: [CompanyService]
})
export class CompanyModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes} from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { companyReducer, selectedCompanyReducer } from './reducers/company.reducer';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyModule } from './company/company.module';
import { CompanyEffects } from './effects/company.effects';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/company',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ companies: companyReducer, selectedCompany: selectedCompanyReducer }),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument(),
    CompanyModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

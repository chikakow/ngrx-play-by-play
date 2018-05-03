import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as companyActions from './../actions/company.actions';
import { CompanyService } from '../company.service';

@Injectable()
export class CompanyEffects {

    constructor(
        private companyService: CompanyService,
        private actions$: Actions
    ) { }

    @Effect() loadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES).pipe(
            switchMap(() => this.companyService.loadCompanies()
                .pipe(
                    map(companies => (new companyActions.LoadCompaniessSuccessAction(companies)))
                )
            )
        );
 
    @Effect() deleteCompany$ = this.actions$
    .ofType(companyActions.DELETE_COMPANY).pipe(
        switchMap((action:any) => this.companyService.deleteCompany(action.payload)
            .pipe(
                map((companyId: number) => (new companyActions.DeleteCompanySuccessAction(companyId)))
            ))
    ) 
}
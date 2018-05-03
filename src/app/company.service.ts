import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Company } from './models/company';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) { }
  
  loadCompanies(): Observable<Company[]> {
     return  this.http.get('https://a5wg0fx01g.execute-api.us-east-2.amazonaws.com/prod/companies').pipe(
       map((response: any )=> <Company[]>response.Items.map((c) => {
          c.id = c.companyId;
          c.name = c.companyName;
          return c;
       }))
     );
  }

  deleteCompany(companyId: number): Observable<number> {
    return this.http.request('delete', 'https://a5wg0fx01g.execute-api.us-east-2.amazonaws.com/prod/companies', { body: {companyId: companyId}}).pipe(
      map((response: any) => response.companyId)
    );
  }
}

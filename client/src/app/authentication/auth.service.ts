import { ErrorHandler } from './../shared/classes/error-handler';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Person } from "app/shared/types/Person";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  private apiBaseUrl: string = 'http://localhost:3000/api';
  private baseHeader = new Headers({ 'Content-Type': 'application/json' });
  //register user method
  register(person: Person): Observable<Person> {

    let options = new RequestOptions({ headers: this.baseHeader });
    let url = this.apiBaseUrl + '/People'
    return this.http.post(url, person, options)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }
}

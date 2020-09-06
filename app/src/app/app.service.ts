import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(name: string): Observable<any> {
    const params = {username: 'name'};
    return this.http.get('/login', {params});
  }
}

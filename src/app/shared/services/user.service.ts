import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<{results: Array<any>, info: object}>('/assets/files/users.json').pipe(delay(3e3));
  }

}

import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Models/Users';

 @Injectable({
   providedIn: 'root'
 })
//@Injectable()
export class  services {

  UrlBase = environment.UrlBase;

  private http: HttpClient;
  constructor(@Inject(HttpClient) http: HttpClient, ) { 
    this.http = http;
  }

  GetUser(){
    return this.http.get<Array<User>>(this.UrlBase + '?token=' + localStorage.getItem('token'));
  }

LogIn(username:any, password:any){
    var body = this.BuildBody(username, password);
    return this.http.post<any>(this.UrlBase + '/login', body);
}

Register(username:any, password:any){
    var body = this.BuildBody(username, password);
    return this.http.post<any>(this.UrlBase + '/register', body);
}

  BuildBody(username:any, password:any){
    var body = new FormData();
    body.append('UserName', username);
    body.append('Password', password);
    return body;
  }

}


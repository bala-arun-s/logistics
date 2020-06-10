import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  strurl:string = "http://localhost:8081/studentlist";
  constructor(private http: HttpClient) { }

  public getStudents(){
    return this.http.get(this.strurl);
  }

  loginurl:string ;
  public loginby(pass){
    this.loginurl ="http://localhost:8081/up/"+pass;
    return this.http.get(this.loginurl)
  }
  
}

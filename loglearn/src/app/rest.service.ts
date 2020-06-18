import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public userData;


  constructor(private http: HttpClient) { }

  public storeData(data){
    this.userData = data;
  }
  public getUserData(){
    return this.userData;
  }
  public reciver() {
    const reciverurl="http://localhost:8200/reciver/"+this.userData['_id'];
    return this.http.get(reciverurl);
  }
  public sender() {
    const senderurl="http://localhost:8200/sender/"+this.userData['_id'];
    return this.http.get(senderurl);
  }
  public itemList() {
    const senderurl="http://localhost:8200/serviceList/"+this.userData['_id'];
    return this.http.get(senderurl);
  }
  public history() {
    const senderurl="http://localhost:8200/history/"+this.userData['_id'];
    return this.http.get(senderurl);
  }
  public delivered(itemid){
    return this.http.post("http://localhost:8200/delivered",[this.userData['_id'],itemid],
    {headers:new HttpHeaders({"Content-Type":"application/json"})})
  }

  /*loginurl:string ;
  public loginby(pass){
    this.loginurl ="http://localhost:8081/up/"+pass;
    return this.http.get(this.loginurl)
  }*/
  
}

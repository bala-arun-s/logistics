import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Observable } from  'rxjs/Observable';
// import { map } from 'rxjs/add/operator/map';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public userData;


  constructor(private http: HttpClient) { 
    console.log("cons reaload localSrorage",localStorage.getItem('localData'));
    this.userData=JSON.parse(localStorage.getItem('localData'));
    console.log("cons assign local to userData",this.userData);
    
    //console.log(JSON.parse(localStorage));
  }

  public storeData(data){
    localStorage.clear();
    this.userData = data;
    localStorage.setItem("localData",JSON.stringify(data));
    console.log("insialisation localSrorage",localStorage.getItem('localData'));
  }
  public getUserData(){
    return this.userData;
  }
  public reciver() {
    const reciverurl="http://localhost:8200/reciver/"+this.userData['_id'];
    return this.http.get(reciverurl);
  }
  // public reciver()   {
  //   console.log("rezzz",this.userData['_id']);
  //   const reciverurl="http://localhost:8200/reciver/"+this.userData['_id'];
  //   this.http.get(reciverurl).pipe(
      
  //     map(items  => {
  //       console.log("map");
  //       return items;
  //     }));
  // }
    // this.http.get(reciverurl).pipe(map(action  => {

    //     action.map((a => {}));
      
    //   })
      
    //   .catch((err)=>{
      
    //   console.error(err);
      
    //   }));
  //}
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

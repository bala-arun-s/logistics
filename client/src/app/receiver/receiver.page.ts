import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from  'rxjs/Observable';
import { map } from 'rxjs/add/operator/map';

//import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.page.html',
  styleUrls: ['./receiver.page.scss'],
})
export class ReceiverPage implements OnInit {
  resiveObData: Observable<object>;
  resiveData;

  constructor(/*private router : Router*/private restapi: RestService,public http:HttpClient) { 
  /* this.resiveData=*/
  this.restapi.reciver().subscribe((res)=>{
      this.resiveData = res;
      console.log(res);
    }
   )
  //  for (const type of this.resiveData) {
  //    this.resiveObData.pipe.
  //  }

   
  //  this.resiveData = this.restapi.reciver();
   }
   

  ngOnInit() {
  }

}

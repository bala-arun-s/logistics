import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private studentlist ;
  constructor(private restapi: RestService) {
    this.restapi.getStudents().subscribe((res)=>{
      console.log(res);
      this.studentlist = res;
    }
    )
  }

}

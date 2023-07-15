import { Component } from '@angular/core';
import {
  InsertedSuccess,
  FormDetails,
  UniqueConstraintError,
  contact,
  Read
} from '../crud';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  User: contact = {
    name: '',
    email: '',
    message:''
  };
  Subscription: Subscription = new Subscription();
 constructor(private Service:CRUDService){}
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

   
    this.Subscription = this.Service.Insert3(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
         // this.ErrorMsg = `${this.User.name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.name} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    
  }
}

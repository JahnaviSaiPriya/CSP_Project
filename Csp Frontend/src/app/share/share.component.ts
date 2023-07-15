import { Component } from '@angular/core';
import {
  InsertedSuccess,
  Read,
  Signup,
  share1,
  UniqueConstraintError,
} from '../crud';
import { NgForm } from '@angular/forms';
import { CRUDService } from '../crud.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
  isFormDeleted: boolean = false;
  constructor(private Service: CRUDService) { }
  ngOnInit() { }
  Subscription: Subscription = new Subscription();
  User: share1 = {
    title: '',
    name: '',
    email: '',
    story:''
  };
  SuccessMsg = '';
  ErrorMsg = '';
  canshow='';
  a = [];
  Insert(Form: NgForm) {
    console.log(Form.value);
    this.Subscription = this.Service.Insert2(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.email} already Exists`;
        }
        else {
          this.SuccessMsg = `${this.User.story}Inserted Successfully`;
          alert("Inserted Successfully");
          Form.reset();
        }
      }
    });

  }
 
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}

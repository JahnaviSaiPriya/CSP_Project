import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from '../crud.service';
import {
  InsertedSuccess,
  Read,
  Crud,
  UniqueConstraintError,
} from '../crud';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit,OnDestroy {
  isDropdownOpen: boolean = false;

  openDropdown(event: MouseEvent) {
    this.isDropdownOpen = true;
  }
  
  closeDropdown(event: MouseEvent) {
    this.isDropdownOpen = false;
  }
  feedbackForm!: FormGroup;
  submitted: boolean = false;
  msg: string = '';
  ratings!: number;

  category: { id: number, value: string }[] = [
    { id: 1, value: 'ACTS AND RULES' },
    { id: 2, value: 'STORIES' },
    { id: 3, value: 'COMPLAINT REGISTRATION' }
  ];

  constructor(private formBuilder: FormBuilder,private Service:CRUDService) { }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      category: [null, Validators.required],
      review: ['', [Validators.required, Validators.min(0)]]
    });
  }

  get formControls() {
    return this.feedbackForm.controls;
  }

  setRating(ratings: number) {
    this.ratings = ratings;
    this.User.Ratings=ratings;
  }

  sendFeedback() {
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }

    // Submit feedback form logic here
    this.msg = 'Feedback submitted successfully';
    this.feedbackForm.reset();
    this.submitted = false;
  }
  User: Crud = {
    name: '',
    email: '',
    Review:'',
    Ratings:0
  };
  Subscription: Subscription = new Subscription();
 
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';

   
    this.Subscription = this.Service.Insert(this.User).subscribe({
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
  deletedMsg=''
  errorMsg=''
  Delete() {
    alert('Deleting...');
    this.deletedMsg = '';
    this.errorMsg = '';
  
    this.Subscription = this.Service.Delete(this.User.email).subscribe({
      next: () => {
        this.deletedMsg = `Deleted Successfully`;
        console.log(`Deleted values: name=${this.User.name}, email=${this.User.email}, Review=${this.User.Review}, Ratings=${this.User.Ratings}`);
      },
      error: (error: any) => {
        this.errorMsg = `Error occurred while deleting: ${error}`;
        console.log(error);
      },
    });
  }
  updatedMsg='';
  Update() {
    alert('updated successfully!!!');
    this.ErrorMsg = '';
    this.updatedMsg = '';
      
    const Data = {
      name: this.User.name,
      email: this.User.email,
      Review: this.User.Review,
      Ratings: this.User.Ratings,
     
    };
      
    this.Subscription = this.Service.Update(this.User.email,Data).subscribe({
      next: (data: any) => {
        console.log(`Updated values: name=${this.User.name}, email=${this.User.email},Review=${this.User.Review},Ratings=${this.User.Ratings}`);
        this.updatedMsg = `Updated data for email ${this.User.email} successfully`;
      },
      error: (error: any) => {
        console.log(error);
        this.ErrorMsg = '';
      }
    });
  }
ngOnDestroy(): void {
  
}
}

import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  InsertedSuccess,
  FormDetails,
  login,
  UniqueConstraintError,
  Read
} from '../crud';
import { Subscription } from 'rxjs';
import { CRUDService } from '../crud.service';
import { SignupService } from '../signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  feedbackForm!: FormGroup;
  submitted: boolean = false;
sus=true;
  constructor(private formBuilder: FormBuilder,private router:Router,private Service:SignupService) {}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // validateForm() {
  //   this.submitted = true;
  //   if (this.feedbackForm.invalid) {
  //     return;
  //   }
  //   this.router.navigate(['/home']);
  //   // Perform further actions or submit the form
  //   console.log('Form submitted successfully');
  // }
 
    // constructor(private Service: ServService) {}
   
    Subscription: Subscription = new Subscription();
    User: login = {
      email: '',
      password: ''
    };  
    d = []; 
    emails = '';
    SuccessMsg = '';
    ErrorMsg = '';  
    oper(){
      const pass = this.User.password; 
        const cred = this.d[0][2];   
        const name = this.d[0][0];
        this.Service.userName=name;
        console.log(cred);
        console.log(name);
        if(pass==cred){ 
          // this.SuccessMsg = "Login Successful";
         
          this.Subscription = this.Service.Insert2(this.User).subscribe({
          next: (Data: InsertedSuccess | UniqueConstraintError) => {  
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.email} alredy Exists`; 
          } else {   
            this.SuccessMsg = `${this.User.email} Inserted Succesfully`;
            this.router.navigate(['/home']) 
            }
        },
        error: (Error) => {
          console.log(Error);
        }, 
      });
    } 
    else{
      this.ErrorMsg = "Enter Correct Password" ; 
      // throw Error;
      this.sus=false;
    }
    }
    Insert() {  
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      
        this.Read();  
       
            }

 
    Read() { 
      this.ErrorMsg = '';
      this.SuccessMsg = '';
      this.Subscription = this.Service.Read(this.User.email).subscribe({
         next: (Data: Read) => {
          if ('errorNum' in Data) {
            this.ErrorMsg = `${this.User.email} not Exists`;
          } else {
            // console.log(Data.Result);    
            this.d = Data.Result;  
            this.oper();
            // console.log(this.d); 
            
           // this.router.navigate(['/home']);
             
          }  
        },
        error: (Error) => {
          console.log(Error);
        },
      }); 
    }
    ngOnDestroy() {
      this.Subscription.unsubscribe();
    }
  }



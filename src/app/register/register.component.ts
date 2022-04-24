import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any ={
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email,password } = this.form;
    this.authservice.register(email, password).subscribe(
      data =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignUpFailed=true;
        
      }
    );
  }

}

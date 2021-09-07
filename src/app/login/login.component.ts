import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup; 

  constructor() {
    this.loginForm =new FormGroup({
      username: new FormControl('', [
  
        Validators.required,
        
      ]),
      password: new FormControl('', [
  
        Validators.required,
       
      ]),
      
    });
  
  }

  ngOnInit(): void {
    console.log("login");
  }
  handleLogin() {


  }
  get username() {
    return this.loginForm.controls['username'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  
}

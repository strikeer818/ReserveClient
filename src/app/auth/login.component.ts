import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: 
  [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService, private router : Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }
  form!: UntypedFormGroup;
  onSubmit(): void {
    let loginRequest : LoginRequest = <LoginRequest> { 
      userName : this.form.controls["userName"].value,
      password : this.form.controls["password"].value
    };
    this.authService.login(loginRequest).subscribe(
      {
        next: result=> { 
          console.log(result.message);
          this.router.navigate(["/"]);
        },
        error: error=>console.error(error),
      },
    )
  }
}
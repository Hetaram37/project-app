import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hidePassword = true;
  loginInvalid = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  ngOnInit(): void {
  }

  onSubmit() {
    this.spinner.show();
    this.loginForm.controls.email.markAsTouched();
    this.loginForm.controls.password.markAsTouched();

    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value)
      .pipe(first())
      .subscribe({
          next: response => {
              // this.toastrService.success('You logged in successfully', 'Success');
              localStorage.setItem('user_id', response['data']['user_id']);
              localStorage.setItem('token', response['data']['token']);
              localStorage.setItem('email', response['data']['email']);
              localStorage.setItem('userName', response['data']['name']);
              localStorage.setItem('exp_time', response['data']['expire_on']);
              this.router.navigate([response['data']['path']]);
          },
          error: error => {
            if (error) {
              this.toastrService.error(error, 'Error');
            } else {
              this.toastrService.error('Oops! Something went wrong', 'Error');
            }
          }
      });
    }
    this.spinner.hide();
  }

  togglePasswordType() {
    this.hidePassword = !this.hidePassword;
  }
}

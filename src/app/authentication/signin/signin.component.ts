import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { query } from '@angular/animations';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  btnLoginColor = 'primary';
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['A0001', Validators.required],
      password: ['000000', Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get('username').setValue('A0001');
    this.authForm.get('password').setValue('000000');
    this.btnLoginColor = 'primary';
  }
  teacherSet() {
    this.authForm.get('username').setValue('T00001');
    this.authForm.get('password').setValue('000000');
    this.btnLoginColor = 'accent';
  }
  studentSet() {
    this.authForm.get('username').setValue('S0001');
    this.authForm.get('password').setValue('000000');
    this.btnLoginColor = 'warn';
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.subs.sink = this.authService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              setTimeout(() => {
                const role = this.authService.currentUserValue.role;
                if (role === Role.All || role === Role.Admin) {
                  this.router.navigate(['admin/teachers/all-teachers']);
                } else if (role === Role.Teacher) {
                  this.router.navigate(['/teacher/lectures']);
                } else if (role === Role.Student) {
                  this.router.navigate(['/student/homework']);
                } else {
                  this.router.navigate(['/authentication/signin']);
                }
                this.loading = false;
              }, 1000);
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          }
        );
    }
  }
}

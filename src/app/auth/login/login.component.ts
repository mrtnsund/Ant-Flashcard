import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { timeout } from 'rxjs/operators';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  error;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private notification: NzNotificationService,

  ) {
    this.error = '';
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.controls.email.value && this.validateForm.controls.password.value) {
      this.authService
        .login(this.validateForm.value)
        .pipe(timeout(5000))
        .subscribe((res: any) => {
          localStorage.setItem('authorization', res.token);
          this.router.navigate(['/home']);
        },
        err => {
          if (err instanceof TimeoutError) {
            this.notification.create(
              'error',
              'Server taking too long to respond',
              '',
              {nzPlacement: 'bottomRight'},
            );
          } else {
            this.notification.create(
              'error',
              `${err.error.error}`,
              '',
              {nzPlacement: 'bottomRight'},
            );
          }
        });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
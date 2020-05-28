import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { timeout } from 'rxjs/operators';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  errors = '';

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private notification: NzNotificationService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      passwordRepeat: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const email = this.validateForm.controls.email.value;
    const password = this.validateForm.controls.password.value;
    const passwordRepeat = this.validateForm.controls.passwordRepeat.value;
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const passwordRegex = new RegExp(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/);

    if (email && password && passwordRepeat) {
      if ((password === passwordRepeat)) {
        const user: IUser = {
          username: '',
          email,
          password,
          cards: [],
        };

        if (emailRegex.test(email)) {
          if (passwordRegex.test(password)) {
            this.authService
              .register(user)
              .pipe(timeout(5000))
              .subscribe(
                (res: any) => {
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
                  `${err.message}`,
                  '',
                  {nzPlacement: 'bottomRight'},
                );
                }
              }
            );
          } else {
            this.notification.create(
              'error',
              'Password must contain at least one letter, at least one number, and be longer than six charaters.',
              '',
              {nzPlacement: 'bottomRight'},
            );
          }
        } else {
          this.notification.create(
            'error',
            'Please enter a valid email',
            '',
            {nzPlacement: 'bottomRight'}
          );
        }
      } else {
        this.notification.create(
          'error',
          `Password does not match`,
          '',
          {nzPlacement: 'bottomRight'},
        );
      }
    }
  }


}

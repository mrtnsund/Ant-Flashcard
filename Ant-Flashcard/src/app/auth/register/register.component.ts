import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user.interface';

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
    public router: Router
  ) {
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
    const email = this.validateForm.controls.email.value;
    const password = this.validateForm.controls.password.value;
    const passwordRepeat = this.validateForm.controls.passwordRepeat.value;

    if (email && password && passwordRepeat) {
      if ((password === passwordRepeat)) {
        const user: IUser = {
          username: '',
          email,
          password,
          cards: [],
        };

        this.authService
          .register(user)
          .subscribe(
            (res: any) => {
            localStorage.setItem('authorization', res.token);
            this.router.navigate(['/home']);
            },
          err => {
            alert(err.error.error);
          }
          );
      } else {
          alert('Password does not match');
      }
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      passwordRepeat: [null, [Validators.required]]
    });
  }

}

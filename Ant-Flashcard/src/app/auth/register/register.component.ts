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
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if ((this.validateForm.controls['password'].value === this.validateForm.controls['passwordRepeat'].value)) {
      const user: IUser = {
        username: 'test',
        email: this.validateForm.controls['email'].value,
        password: this.validateForm.controls['password'].value,
      }
      this.authService.register(user);
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

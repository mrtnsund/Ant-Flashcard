import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  resetPassword: FormGroup;
  resetSent;
  email = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private notification: NzNotificationService
    ) {}

  ngOnInit(): void {
    this.resetPassword = this.fb.group({
      email: [null, [Validators.required]]
    });
    this.resetSent = false;
  }

  submitForm() {
    this.resetPassword.controls.email.markAsDirty();
    this.resetPassword.controls.email.updateValueAndValidity();
    this.email = this.resetPassword.controls.email.value;

    this.authService.reset(this.email)
    .subscribe(
      () => {
        this.resetSent = true;
        console.log(this.resetSent);
        // this.notification.create('success', `Reset mail sent to ${this.email}`, '', {nzPlacement: 'bottomRight'});
      },
      (err) => this.notification.create('error', err.error.error, '', {nzPlacement: 'bottomRight'})
      );
  }

}

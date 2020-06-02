import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      passwordRepeat: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const password = this.validateForm.controls.password.value;
    const passwordRepeat = this.validateForm.controls.passwordRepeat.value;

    if (password === passwordRepeat) {
      const token = this.route.snapshot.paramMap.get('token');
      this.authService
        .updatePassword(token, password)
        .subscribe(() => {
          this.notification.create(
            'success',
            'Successfully updated password',
            '',
            { nzPlacement: 'bottomRight' },
          );
          this.router.navigate(['/login']);
        },
        err => {
          this.notification.create(
            'error',
            err.error.error,
            'Redirecting back to login',
            { nzPlacement: 'bottomRight'}
          );
          this.router.navigate(['/login']);
        });
    } else {
      this.notification.create(
        'error',
        'Passwords do not match',
        '',
        { nzPlacement: 'bottomRight'},
      );
      }
  }

}

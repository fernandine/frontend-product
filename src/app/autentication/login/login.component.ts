import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService
        .login(this.form.value.username, this.form.value.password)
        .subscribe((success) => {
          if (success) {
            location.reload();

            this.notificationService.success('Logged in successfully');
          } else {
            this.notificationService.error('Invalid username or password');
          }
          this.router.navigate(['/products']);
        });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please fill all fields',
      });
    }
  }
}

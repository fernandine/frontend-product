import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignIn: any;
  loginFormGroup!: FormGroup;
  isDisabled: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private injector: Injector
  ) {

  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.loginFormGroup.valueChanges.subscribe(() => {
      if (this.loginFormGroup.invalid) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    });
  }

  handleSubmit() {
    if (this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
      return;
    }
    const formForApi = {
      usernameOrEmail: this.loginFormGroup.value['email'],
      password: this.loginFormGroup.value['password']
    }
    const authService = this.injector.get(AuthInterceptorService);
    authService.login(formForApi).subscribe(
      data => console.log(data)
    )

  }

  get email() { return this.loginFormGroup.get('email') }
  get password() { return this.loginFormGroup.get('password') }

  getErrorMessage(fieldName: string) {
    const field = this.loginFormGroup.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }

}

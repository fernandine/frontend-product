import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent {

  profileForm!: FormGroup;
  currentUser!: User;
  updateSuccess: boolean = false;
  updateError: boolean = false;
msgs: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.currentUser = {
        id: currentUser.id,
        firstName: '',
        lastName: '',
        email:currentUser.username,
        password: '',
        cpf: '',
        phone: '',
        birthDay: '',
        roles: []
      };
      this.profileForm = this.formBuilder.group({
        firstName: [this.currentUser.firstName, Validators.required],
        lastName: [this.currentUser.lastName],
        email: [this.currentUser.email, [Validators.required, Validators.email]],
        cpf: [this.currentUser.cpf, Validators.required],
        phone: [this.currentUser.phone, Validators.required],
        birthDay: [this.currentUser.birthDay],
      });
    }
  }

  onSubmit() {
    const updatedUser: User = {
      id: this.currentUser.id,
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      email: this.profileForm.value.email,
      password: this.currentUser.password,
      cpf: this.profileForm.value.cpf,
      phone: this.profileForm.value.phone,
      birthDay: this.profileForm.value.birthDay,
      roles: this.currentUser.roles
    }
    this.userService.updateUser(this.currentUser.id, updatedUser).subscribe(
      () => {
        this.updateSuccess = true;
        this.updateError = false;
        this.notificationService.success('Dados atualizados com sucesso!');
      },
      () => {
        this.updateError = true;
        this.updateSuccess = false;
        this.notificationService.error('Erro ao atualizar os dados.');
      }
    );
  }
}


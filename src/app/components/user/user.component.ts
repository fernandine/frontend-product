import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
      this.userService.getUser().subscribe(usuarios => {
        this.users = usuarios;
      });
    }

  excluirUsuario(usuario: User): void {
      const index = this.users.findIndex(p => p === usuario);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
  }


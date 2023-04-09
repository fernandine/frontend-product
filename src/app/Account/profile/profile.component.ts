import { Component } from '@angular/core';
import { User } from '../../common/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  currentUser: any;

  constructor(
    private storage: StorageService
    ) {}

    ngOnInit(): void {
       this.currentUser = this.storage.getItem('currentUser');

}
}

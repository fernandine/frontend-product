import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/common/address';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Input() addresses!: Address[];

  user: boolean = true;
  address: boolean = false;

  constructor(private router: Router) {}

exibirUser() {
this.user = true;
this.address = false;
}

exibirAddress() {
this.address = true;
this.user = false;
}

goBack() {
  this.router.navigate(['/account']);
}

}

import { Component, Input } from '@angular/core';
import { Address } from 'src/app/common/address';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent {
  @Input() addresses!: Address[];
}

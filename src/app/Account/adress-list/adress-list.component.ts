import { Component, Input } from '@angular/core';
import { Address } from 'src/app/common/address';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html'
})
export class AdressListComponent {

  @Input() addresses!: Address[];
  showAddAddressDialog = false;

  constructor(private addressService: AddressService) { }

  addAddress() {
    this.showAddAddressDialog = true;
  }

  editAddress(address: Address) {
    this.addressService.updateAddress(address).subscribe(
      () => {
        console.log('Endereço atualizado com sucesso.');
      },
      (error) => {
        console.log('Ocorreu um erro ao atualizar o endereço: ', error);
      }
    );
  }

  deleteAddress(address: Address) {
    this.addressService.deleteAddress(address.id).subscribe(
      () => {
        console.log('Endereço excluído com sucesso.');
      },
      (error) => {
        console.log('Ocorreu um erro ao excluir o endereço: ', error);
      }
    );
  }

}

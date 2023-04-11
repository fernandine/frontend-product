import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from 'src/app/common/address';
import { AuthService } from '../../services/auth.service';
import { AddressService } from '../../services/address.service';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html',
})
export class AdressListComponent {

  adresses$!: Observable<Address[]>;
  userId!: number;

  showAddAddressDialog = false;

  constructor(
    private addressService: AddressService,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadAddresses();
  }

  loadAddresses() {
    const currentUserId = this.authService.getCurrentUser();
    if (currentUserId) {
      this.userId = currentUserId.id;
      this.adresses$ = this.addressService.getByUserId(this.userId);
    }
  }

  openAddAddressDialog() {
    this.showAddAddressDialog = true;
  }

  editAddress(address: Address) {
    console.log('Endereço editado:', address);
  }

  confirmDelete(id: number) {
    if (confirm('Tem certeza que deseja excluir este endereço?')) {
      this.addressService.deleteAddress(id).subscribe(
        () => {
          this.onSuccess('Endereço excluído com sucesso!');
          location.reload();
        },
        (error) => this.onError('Erro ao excluir endereço.')
      );
    }
  }
  onSuccess(message: string) {
    this.notificationService.success(message);
  }

  onError(message: string) {
    this.notificationService.error(message);
  }
}

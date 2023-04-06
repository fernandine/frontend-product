import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/common/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html'
})
export class AdressFormComponent {

  addresses: Address[] = [];
  showAddressForm = false;
  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private addressService: AddressService) {
    this.addressForm = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAddressList();
  }

  getAddressList(): void {
    this.addressService.getAddresses().subscribe(addresses => this.addresses = addresses);
  }

  toggleAddressForm(): void {
    this.showAddressForm = !this.showAddressForm;
  }

  saveNewAddress(): void {
    const newAddress = this.addressForm.value as Address;
    this.addressService.createAddress(newAddress).subscribe(address => {
      this.addresses.push(address);
      this.toggleAddressForm();
      this.addressForm.reset();
    });
  }
}


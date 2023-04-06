import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../common/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiUrl = environment.shopApiUrl + '/adresses';

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  getAddressByCEP(cep: string): Observable<Address> {
    const url = `${this.apiUrl}/${cep}`;
    return this.http.get<Address>(url);
  }

  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.apiUrl, address);
  }

  updateAddress(address: Address): Observable<Address> {
    const url = `${this.apiUrl}/${address.id}`;
    return this.http.put<Address>(url, address);
  }

  deleteAddress(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


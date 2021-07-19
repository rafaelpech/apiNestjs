import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  productoURL = "http://localhost:3030/";

  constructor(private httpClient: HttpClient) {  }

  public getAll(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`api/contact`);
  }

  public create(contact: Contact): Observable<any>{
    return this.httpClient.post<any>(`api/contact`, contact);
  }

  public getOne(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`api/contact/${id}`);
  }

  public update(id: number, contact: Contact): Observable<any> {
    return this.httpClient.patch<any>(`api/contact/${id}`, contact);
  }

  public updateDelete(contact: Contact): Observable<any> {
    const id = contact.id;
    return this.httpClient.patch<any>(`api/contact/delete/${id}`, contact);
  }
  
  // inactivos

  public getAllOff(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`api/recycleContact`);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`api/recycleContact/${id}`);
  }

  public restore(contact: Contact): Observable<any> {
    const id = contact.id;
    return this.httpClient.patch<any>(`api/recycleContact/${id}`, contact);
  }
}

export interface Contact {
    id?: Number;
    nombre: string;
    apellido: string;
    telefono: string;
    correo:string;
    edad: number;
    activo: number;
}
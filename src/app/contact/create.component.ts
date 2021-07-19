import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact'
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './create.component.html',
  providers: [ContactService],
})
export class ContactCreateComponent implements OnInit {

  public nombre = '';
  public apellido = '';
  public telefono = '';
  public correo = '';
  public edad: number = 0;
  public activo: number = 1;

  constructor(
    private _contactService: ContactService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const contact = new Contact(this.nombre, this.apellido, this.telefono, this.correo, this.edad, this.activo);
    this._contactService.create(contact).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}

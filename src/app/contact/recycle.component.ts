import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Contact} from '../models/contact'

@Component({
    selector: 'app-contact-recycle',
    templateUrl: './recycle.component.html',
    providers: [ContactService],
})
export class ContactRecycleComponent implements OnInit {

    @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport | undefined;

    listcontact: Contact[] = [];
    listdata: any;
    list: any;
    listaVacia = undefined;
    public cont = 0;

    constructor(private _contactService: ContactService, public _router: Router) {
    }

    ngOnInit(): void {
        this.getData();
    }

    borrar(id: number): void {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se eliminara permanentemente',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this._contactService.delete(id).subscribe(res => this.getData());
          Swal.fire(
            'OK',
            'Contacto eliminado',
            'success'
          );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Registro rescatado',
            'error'
          );
        }
      });
    }

    details(id: number): void {
      this._router.navigate([`detalle/${id}`]);
    }

    restore(contact: Contact): void {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se restaurara el registro',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this._contactService.restore(contact).subscribe(res => this.getData());
          Swal.fire(
            'OK',
            'Contacto restaurado',
            'success'
          );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Registro cancelado',
            'error'
          );
        }
      });
    }

    private getData() {
        this._contactService.getAllOff().subscribe(
            data => {
              this.listcontact = data;
              this.cont = data.length;
              this.listaVacia = undefined;
              this.listdata = Object.values(data);
              this.list = this.listdata[0]
              console.log(this.listdata[0])
            },
            err => {
              this.listaVacia = err.error.message;
            }
          );
    }
}

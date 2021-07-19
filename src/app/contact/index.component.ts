import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Contact} from './../models/contact'


@Component({
    selector: 'app-contact-index',
    templateUrl: './index.component.html',
    providers: [ContactService],
})
export class ContactIndexComponent implements OnInit {

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

    borrar(contact: Contact): void {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se enviara a la papelera',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this._contactService.updateDelete(contact).subscribe(res => this.getData());
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

    private getData() {
        this._contactService.getAll().subscribe(
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

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../models/contact'

@Component({
  selector: 'app-contact-details',
  templateUrl: './details.component.html',
  providers: [ContactService],
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact | undefined;

  constructor(
    private _contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this._contactService.getOne(id).subscribe(
      data => {
        this.contact = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}

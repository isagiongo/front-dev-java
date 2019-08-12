import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }

}

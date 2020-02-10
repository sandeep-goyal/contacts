import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contacts } from 'src/app/models/contacts.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import *  as ContactsActions from '../../../actions/contact.actions';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit, OnDestroy {

  contacts: Contacts[];
  @Output() editFormData = new EventEmitter<Contacts>();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contacts').subscribe((contactsData) => {
      this.contacts = contactsData;
    });
  }
  editContact(index: number) {
    let selectedValues = { ...this.contacts[index] }; // make a immutable copy of contacts object
    selectedValues.index = index;
    this.editFormData.emit(selectedValues);
  }
  
  delContact(index: number) {
    this.store.dispatch(new ContactsActions.DeleteContact(index));
  }

  ngOnDestroy(){
    this.contacts = [];
  }

}

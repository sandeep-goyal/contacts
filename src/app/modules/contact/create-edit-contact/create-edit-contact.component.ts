import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import *  as ContactsActions from '../../../actions/contact.actions';

@Component({
  selector: 'app-create-edit-contact',
  templateUrl: './create-edit-contact.component.html',
  styleUrls: ['./create-edit-contact.component.scss']
})
export class CreateEditContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('[0-9 ]*')]),
    index: new FormControl(null)
  });

  @Input()
  set formValue(formValue) {
    if (Object.keys(formValue).length)
      this.contactForm.setValue(formValue)
  }
  constructor(private store: Store<AppState>) { }

  onSubmit() {
    this.store.dispatch(new ContactsActions.AddEditContact(this.contactForm.value));
    this.contactForm.reset();
  }

  onReset() {
    this.contactForm.reset();
  }

}

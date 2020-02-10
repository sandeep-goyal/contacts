import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { contactReducer } from '../../reducer/contact.reducer';
import { CreateEditContactComponent } from './create-edit-contact/create-edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component'


@NgModule({
  declarations: [ContactComponent, CreateEditContactComponent, ViewContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {contacts:contactReducer}
    )
  ]
})
export class ContactModule { }

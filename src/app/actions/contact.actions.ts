import { Injectable } from '@angular/core';
import {Action } from '@ngrx/store';
import {Contacts} from '../models/contacts.model';

export const Add_EDIT_CONTACT = '[CONTACT] Add Edit';
export const DELETE_CONTACT = '[CONTACT] Delete';

export class AddEditContact {
    readonly type  = Add_EDIT_CONTACT;
    constructor (public payload: Contacts){}

}

export class DeleteContact {
    readonly type  = DELETE_CONTACT;
    constructor (public payload: number){}

}

export type Actions = AddEditContact | DeleteContact;
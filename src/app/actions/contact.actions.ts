import { Injectable } from '@angular/core';
import {Action } from '@ngrx/store';
import {Contacts} from '../models/contacts.model';

export const Add_CONTACT = '[CONTACT] Add';
export const DELETE_CONTACT = '[CONTACT] Delete';
export const EDIT_CONTACT = '[CONTACT] Edit';
export const GET_CONTACT_DETAIL = '[CONTACT] Detail';

export class AddContact {
    readonly type  = Add_CONTACT;
    constructor (public payload: Contacts){}

}

export class DeleteContact {
    readonly type  = DELETE_CONTACT;
    constructor (public payload: number){}

}

export type Actions = AddContact | DeleteContact;
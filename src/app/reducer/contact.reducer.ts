import { Action } from '@ngrx/store';
import {Contacts} from '../models/contacts.model';
import *  as ContactsActions from '../actions/contact.actions';

const initialState: Contacts = {
    firstName: "Sandeep",
    lastName: "Agrawal",
    age: 37,
    index: null
}


export function contactReducer  (state: Contacts[] = [initialState], action: ContactsActions.Actions){
    switch (action.type) {
        case ContactsActions.Add_CONTACT: 
        if(action.payload.index !== null){
            state[action.payload.index] = action.payload;
            return state;     
        } else{
            return [...state, action.payload]      
        }   
        case ContactsActions.DELETE_CONTACT: 
            state.splice(action.payload, 1);
            return state;

        default :
            return state

    }
}
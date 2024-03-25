
import { ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, SET_IS_LOADING, UPDATE_CONTACT } from "../reducers/contacts.reducer";
import { store } from "../store.js";

export function loadContacts() {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    return contactService.query()
        .then(contacts => {
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('contact action - Cannot load contacts', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function removeContact(contactId) {
    return contactService.remove(contactId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactId })
        })
        .catch(err => {
            console.log('contact action - Cannot remove contact', err)
            throw err
        })
}

export function saveContact(contact) {
    const type = contact._id ? UPDATE_CONTACT : ADD_CONTACT
    return contactService.save(contact)
        .then(savedContact => {
            console.log('savedContact', savedContact)
            store.dispatch({ type, contact: savedContact })
            return savedContact
        })
        .catch(err => {
            console.log('contact action - Cannot save contact', err)
        })
}


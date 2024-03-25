import {storageService} from "./async-storage.service.js"

const STORAGE_KEY = 'contactDB'

export const contactService = {
    query,
    getById,
    remove,
    save,
    getEmptyContact,
}

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            return contacts
        })
}

function getById(contactId) {
    return storageService.get(STORAGE_KEY,contactId)
}

function remove(contactId) {
    return storageService.remove(STORAGE_KEY,contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY,contact)
    } else {
        return storageService.post(STORAGE_KEY,contact)
    }
}

function getEmptyContact() {
    return {
        createdAt: Date.now(),
        firstName: '',
        lastName: '', 
        phoneNum: '', 
    }
}
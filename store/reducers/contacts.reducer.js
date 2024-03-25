export const SET_CONTACTS = 'SET_CONTACTS'
export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    contacts: null,
    isLoading: false
}

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            }
        case REMOVE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}
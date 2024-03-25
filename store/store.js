import { contactsReducer } from "./reducers/contacts.reducer.js"

const { createStore, combineReducers, compose } = Redux

const rootReducer = combineReducers({
    contactsModule: contactsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store

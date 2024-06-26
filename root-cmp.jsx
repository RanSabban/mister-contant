const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux

import { HomePage } from "./pages/HomePage.jsx"

import { store } from './store/store.js'

import { AppHeader } from "./cmps/AppHeader.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"

export class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <section className="app">
                        <AppHeader />
                        <main className='main-layout'>
                            <Routes>
                                <Route element={<HomePage />} path="/" />
                            </Routes>
                        </main>
                        <AppFooter />
                    </section>
                </Router>
            </Provider>

        )
    }
}



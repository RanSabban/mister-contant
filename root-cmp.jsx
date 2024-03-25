const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux




export class App extends React.Component {

    render() {
        return (
            // <Provider store={store}>
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
            // </Provider>

        )
    }
}



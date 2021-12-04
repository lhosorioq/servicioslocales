
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegistroProveedoresView from './views/RegistroProveedoresView'

import FooterComp from './components/footer/FooterComp';
import { RoutePrivate } from './components/routes/RoutePrivate.jsx';
import RegistroClientesView from './views/RegistroClientesView';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    {/* <Home /> */}
                </Route>
                <Route path="/conocenos" exact>
                    {/* <Conocenos /> */}
                </Route>
                <Route path="/contacto" exact>
                    {/* <Contacto /> */}
                </Route>
                <Route path="/login" exact>
                    {/* <LoginEmprendedorView /> */}
                </Route>
                <RoutePrivate path="/emprendedor" exact>
                    {/* <DataEmprendedorView /> */}
                </RoutePrivate>
                <Route path="/signup" exact>
                    {/* <RegistroProveedoresView/> */}
                    <RegistroClientesView/>
                </Route>
                <Route path="/admin" exact>
                    {/* <LoginAdminView /> */}
                </Route>
                <RoutePrivate path="/admin/data" exact>
                    {/* <DataAdminView /> */}
                </RoutePrivate>
                <RoutePrivate path="/logout" exact></RoutePrivate>
            </Switch>
            <FooterComp />
        </Router>
    );
}

export default App;


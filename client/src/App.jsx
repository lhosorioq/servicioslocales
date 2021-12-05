import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegistroProveedoresView from './views/RegistroProveedoresView';
import LoginProveedorView from './views/LoginProveedorView'
import LoginClienteView from './views/LoginClienteView'
import LoginAdminView from './views/LoginAdminView'
import DataAdminView from './views/DataAdminView'

import FooterComp from './components/footer/FooterComp';
import { RouteAdmin, RouteProveedor, RoutePrivate } from './components/routes/RoutePrivate.jsx';
import ContactoViews from './views/ContactoViews';
import EquipoViews from './views/EquipoViews';
import RegistroClientesView from './views/RegistroClientesView';
import Homeviews from './views/HomeViews';
import CardView from './views/CardView';
import DataEmprendedorView from './views/DataEmprendedorView';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Homeviews />
                </Route>
                <Route path="/conocenos" exact>
                    {/* <Conocenos /> */}
                </Route>
                <Route path="/contacto" exact>
                    <ContactoViews />
                </Route>
                <Route path="/equipo" exact>
                    <EquipoViews />
                </Route>
                <Route path="/login-empresa" exact>
                    <LoginProveedorView />
                </Route>
                <Route path="/login-cliente" exact>
                    <LoginClienteView />
                </Route>
                <Route path="/login-admin" exact>
                    <LoginAdminView />
                </Route>
                <Route path="/registro-empresa" exact>
                    <RegistroProveedoresView />
                </Route>
                <Route path="/registro-cliente" exact>
                    <RegistroClientesView />
                </Route>
                <Route path="/card/:id" exact>
                    <CardView />
                </Route>
                <RouteProveedor path="/proveedor" exact>
                    <DataEmprendedorView/>
                </RouteProveedor>
                <RouteAdmin path="/admin" exact>
                    <DataAdminView />
                </RouteAdmin>
                <RoutePrivate path="/logout" exact></RoutePrivate>
            </Switch>
            <FooterComp />
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import RegistroProveedoresView from './views/RegistroProveedoresView';

import FooterComp from './components/footer/FooterComp';
import { RoutePrivate } from './components/routes/RoutePrivate.jsx';
import ContactoViews from './views/ContactoViews';
import EquipoViews from './views/EquipoViews';
import RegistroClientesView from './views/RegistroClientesView';
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
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
                <RoutePrivate path="/emprendedor" exact>
                    {/* <DataEmprendedorView /> */}
                </RoutePrivate>
                <Route path="/registro-empresa" exact>
                    <RegistroProveedoresView />
                </Route>
                <Route path="/registro-cliente" exact>
                    <RegistroClientesView />
                </Route>
                <RoutePrivate path="/admin/data" exact>
                    <DataAdminView />
                </RoutePrivate>
                <RoutePrivate path="/logout" exact></RoutePrivate>
            </Switch>
            <FooterComp />
        </Router>
    );
}

export default App;

import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

export const RouteAdmin = (props) => {
    const { path, exact, children } = props;

    if (sessionStorage.getItem('rol') === 'admin') {
        return (
            <>
                <Route path={path} exact={exact}>
                    {children}
                </Route>
            </>
        );
    } else 
        return (
            <Container style={{ width: '100%', height: '800px' }}>
                <h2>No esta autorizado para acceder a esta ruta</h2>
            </Container>
        );
};

export const RouteProveedor = (props) => {
    const { path, exact, children } = props;

    if (sessionStorage.getItem('rol') === 'empresa') {
        return (
            <>
                <Route path={path} exact={exact}>
                    {children}
                </Route>
            </>
        );
    } else
        return (
            <Container style={{ width: '100%', height: '800px' }}>
                <h2>No esta autorizado para acceder a esta ruta</h2>
            </Container>
        );
};

export const RoutePrivate = (props) => {
    const { path, exact, children } = props;

    if (sessionStorage.getItem('token')) {
        return (
            <>
                <Route path={path} exact={exact}>
                    {children}
                </Route>
            </>
        );
    } else
        return (
            <Container style={{ width: '100%', height: '800px' }}>
                <h2>No esta autorizado para acceder a esta ruta</h2>
            </Container>
        );
};
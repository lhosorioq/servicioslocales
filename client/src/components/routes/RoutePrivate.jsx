import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

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
    }
    return (
        <Container style={{width: '100%', height: '800px'}}>
            <h1>No esta autorizado para acceder a esta ruta</h1>
        </Container>
    );
};

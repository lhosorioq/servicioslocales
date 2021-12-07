import React from 'react';
import logo from '../../assets/img/logosl.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Image, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {URL} from '../../libs/url'

export default function NavbarComp() {

    const id = sessionStorage.getItem('id')
    const rol = sessionStorage.getItem('rol')
    const salir = () => {
        sessionStorage.clear();
        window.location.href = '/';
    };
    const img = sessionStorage.getItem('rol') === 'user' ? '/user/imagen/' : '/proveedor/imagen/';

    return (
        <>
            <Navbar
                className="sl-navbar"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand as={Link} to={'/'}>
                        <img src={logo} width="50" height="50" alt="" />{' '}Servicios Locales
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to={'/'}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/acercade'}>
                                Acerca de
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/contacto'}>
                                Contacto
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/equipo'}>
                                Equipo
                            </Nav.Link>
                            {sessionStorage.getItem('rol') === 'admin' ? (
                                <Nav.Link as={Link} to={'/admin'}>
                                    Administrador
                                </Nav.Link>
                            ) : null}
                            {sessionStorage.getItem('rol') === 'empresa' ? (
                                <Nav.Link as={Link} to={'/proveedor'}>
                                    Proveedor
                                </Nav.Link>
                            ) : null}
                            {sessionStorage.getItem('rol') === 'user' ? (
                                <Nav.Link as={Link} to={'/cliente'}>
                                    Cliente
                                </Nav.Link>
                            ) : null}
                        </Nav>
                        <Nav>
                            <NavDropdown
                                title="Registro"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    className="sl-navbar"
                                    href="/registroempresa"
                                >
                                    Empresa/Persona
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="sl-navbar"
                                    href="/registrocliente"
                                >
                                    Cliente
                                </NavDropdown.Item>
                            </NavDropdown>

                            {sessionStorage.getItem('token') ? null : (
                                <NavDropdown
                                    title="Login"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        className="sl-navbar"
                                        href="/loginempresa"
                                    >
                                        Empresa/Persona
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        className="sl-navbar"
                                        href="/logincliente"
                                    >
                                        Cliente
                                    </NavDropdown.Item>
                                    <NavDropdown.Item
                                        className="sl-navbar"
                                        href="/loginadmin"
                                    >
                                        Administrador
                                    </NavDropdown.Item>
                                </NavDropdown>
                            )}

                            {sessionStorage.getItem('token') ? (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        onClick={() => salir()}
                                        to={''}
                                    >
                                        Salir
                                    </Nav.Link>

                                    <NavLink as={Link} to={rol === 'user'? '/cliente': rol === 'empresa'? '/proveedor': '/admin'}>
                                        {sessionStorage.getItem('nombre')}
                                    </NavLink>
                                    {rol ===
                                    'admin' ? null : (
                                        <NavLink
                                            as={Image}
                                            roundedCircle
                                            src={URL + img + id}
                                            onClick={() => salir()}
                                            to={''}
                                            width={50}
                                            height={50}
                                            className="shadow"
                                        />
                                    )}
                                </>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

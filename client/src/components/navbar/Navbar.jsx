import React from 'react'
import  logo  from '../../assets/img/logosl.png'
import {Link} from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


export default function NavbarComp() {

    const salir = () => {
        sessionStorage.clear();
        window.location.href= '/'
    };

    return (
        <>
            <Navbar className="sl-navbar"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand as={Link} to={'/'}>
                        <img src={logo} width="100" height="100" alt="" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to={'/'}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/acerca de'}>
                                Acerca de
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/contacto'}>
                                Contacto
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/equipo'}>
                                Equipo
                            </Nav.Link>
                            {sessionStorage.getItem('rol') === 'admin'? (
                                <Nav.Link as={Link} to={'/admin'}>
                                    Administrador
                                </Nav.Link>
                            ) : null}
                            {sessionStorage.getItem('rol') === 'empresa'? (
                                <Nav.Link as={Link} to={'/proveedor'}>
                                    Proveedor
                                </Nav.Link>
                            ) : null}
                        </Nav>
                        <Nav>
                            
                            <NavDropdown title="Registro" id="basic-nav-dropdown">
                                <NavDropdown.Item className="sl-navbar" href="/registro-empresa">Empresa/Persona</NavDropdown.Item>
                                <NavDropdown.Item className="sl-navbar" href="/registro-cliente">Cliente</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Login" id="basic-nav-dropdown">
                                <NavDropdown.Item className="sl-navbar" href="/login-empresa">Empresa/Persona</NavDropdown.Item>
                                <NavDropdown.Item className="sl-navbar" href="/login-cliente">Cliente</NavDropdown.Item>
                                <NavDropdown.Item className="sl-navbar" href="/login-admin">Administrador</NavDropdown.Item>
                                </NavDropdown>

                            {sessionStorage.getItem('token') ? (
                                <Nav.Link
                                    as={Link}
                                    onClick={() => salir()}
                                    to={''}
                                >
                                    Salir
                                </Nav.Link>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


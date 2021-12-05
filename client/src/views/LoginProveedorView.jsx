import React from 'react';
import LoginComp from '../components/login/LoginComp';
import Axios from 'axios';
import Swal from 'sweetalert2';
import Title from '../components/Titulos/Title';
import { Container } from 'react-bootstrap';
import { MainLayout } from '../assets/Styles/Layouts';

function LoginProveedorView() {
    const loginProveedor = async (data) => {
        const proveedor = { mail: data.email, password: data.password };
        await Axios.post('proveedor/login', proveedor)
            .then((respuesta) => {
                const auth = respuesta.data.auth;
                if (!auth) {
                    Swal.fire({
                        icon: 'error',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    const token = respuesta.data.token;
                    const id = respuesta.data.proveedor._id;
                    const nombre = respuesta.data.proveedor.nombre;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('id', id);
                    sessionStorage.setItem('nombre', nombre);
                    sessionStorage.setItem('rol', 'empresa')
                    window.location.href = '/proveedor'; //pendiente ruta de pagina a la que pasara despues de login

                    Swal.fire({
                        icon: 'success',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <MainLayout>
            <Container className="contenedor">
                <Title title={'Login Empresas'} span={'Login Empresas'} />
                <LoginComp login={loginProveedor} registro="block" rol='/registro-empresa' />
            </Container>
        </MainLayout>
    );
}

export default LoginProveedorView;

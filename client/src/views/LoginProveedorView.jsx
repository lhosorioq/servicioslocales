import React from 'react';
import LoginComp from '../components/LoginComp';
import Axios from 'axios';
import Swal from 'sweetalert2';
// import Title from '../components/Title';
import { Container } from 'react-bootstrap';
// import { MainLayout } from '../styles/Layouts';

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
        // <MainLayout>
            <Container>
                {/* <Title
                    title={'Login Emprendedores'}
                    span={'Login Emprendedores'}
                /> */}
                <LoginComp login={loginProveedor} registro="block" />
            </Container>
        // </MainLayout>
    );
}

export default LoginProveedorView;

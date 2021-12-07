import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { URL } from '../libs/url';

import {MainLayout} from '../assets/Styles/Layouts'
import styled from 'styled-components';

import Icon from '../components/Icons/Icons';

import Swal from 'sweetalert2';

function CardView() {
    const { id } = useParams();
    const uri = URL + `/proveedor/imagen/`;
    const [proveedor, setProveedor] = useState(null);

    const loadProveedor = async (param) => {
        await Axios.get(`/user/proveedor/${id}`)
            .then((response) => {
                setProveedor(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        return proveedor;
    };

    const likes = async () => {
        const data = { likes: proveedor.likes + 1 };

        const token = 'Bearer ' + sessionStorage.getItem('token');

        if (sessionStorage.getItem('token')) {
            await Axios.put(`/user/likes/${proveedor._id}`, data, {
                headers: { Authorization: token },
            })
                .then((response) => {
                    loadProveedor();
                    Swal.fire({
                        icon: 'success',
                        title: 'Like cargado',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else
            Swal.fire({
                icon: 'error',
                title: 'No esta registrado',
                showConfirmButton: false,
                timer: 1500,
            });
    };

    const doesnotlikes = async () => {
        const data = { doesnotlikes: proveedor.doesnotlikes + 1 };

        const token = 'Bearer ' + sessionStorage.getItem('token');

        if (sessionStorage.getItem('token')) {
            await Axios.put(`/user/likes/${proveedor._id}`, data, {
                headers: { Authorization: token },
            })
                .then((response) => {
                    loadProveedor();
                    Swal.fire({
                        icon: 'success',
                        title: 'DisLike cargado',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else
            Swal.fire({
                icon: 'error',
                title: 'No esta registrado',
                showConfirmButton: false,
                timer: 1500,
            });
    };

    useEffect(() => {
        if (!proveedor) {
            loadProveedor();
        }
    });

    if (proveedor) {
        return (
            <MainLayout>
                <h1>{proveedor.nombre}</h1>
                <FuenteH3Styled>
                    <h3>{proveedor.msg_description}</h3>
                </FuenteH3Styled>
                <Row>
                    <Col>
                        <Card
                            style={{ width: '30rem' }}
                            className="mb-4 shadow p-3 mb-5 bg-white rounded"
                        >
                            <Card.Img variant="top" src={uri + proveedor._id} />
                            <Card.Body>
                                <Card.Title> {proveedor.nombre} </Card.Title>
                                <Card.Text>
                                    {' '}
                                    {proveedor.msg_description}{' '}
                                </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Servicio: {proveedor.actividad}{' '}
                                </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Ciudad: {proveedor.ciudad}{' '}
                                </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Departamento: {proveedor.departamento}{' '}
                                </Card.Text>
                                <Button
                                    variant="outline-primary"
                                    onClick={likes}
                                >
                                    Likes: {proveedor.likes}
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                    variant="outline-danger"
                                    onClick={doesnotlikes}
                                >
                                    DisLikes: {proveedor.doesnotlikes}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            style={{ width: '28rem' }}
                            className="mb-4 shadow p-3 mb-5 bg-white rounded"
                        >
                            <Card.Body>
                                <Card.Text>
                                    {' '}
                                    Servicio: {proveedor.actividad}{' '}
                                </Card.Text>
                                <Card.Text> Email: {proveedor.mail} </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Direccion: {proveedor.direccion}{' '}
                                </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Telefono: {proveedor.telefono1}{' '}
                                </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Telefono: {proveedor.telefono2}{' '}
                                </Card.Text>
                                <Card.Text>
                                    {' '}
                                    Descripcion: {
                                        proveedor.msg_description
                                    }{' '}
                                </Card.Text>
                                <ColorIconosStyled>
                                    <Card.Text>
                                        <Icon className="fac fab fa-telegram-plane"></Icon>{' '}
                                        <a
                                            href={proveedor.telegram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {' '}
                                            {proveedor.telegram}
                                        </a>{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        <Icon className="what fab fa-whatsapp"></Icon>{' '}
                                        <a
                                            href={proveedor.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {proveedor.whatsapp}
                                        </a>{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        <Icon className="fac fab fa-twitter"></Icon>{' '}
                                        <a
                                            href={proveedor.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {proveedor.twitter}
                                        </a>{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        <Icon className="fac fab fa-facebook-f"></Icon>
                                        <a
                                            href={proveedor.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {' '}
                                            {proveedor.facebook}
                                        </a>{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        <Icon className="fac fab fa-linkedin"></Icon>{' '}
                                        <a
                                            href={proveedor.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {proveedor.linkedin}
                                        </a>{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        <Icon className="inst fab fa-instagram"></Icon>{' '}
                                        <a
                                            href={proveedor.onstagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {proveedor.onstagram}
                                        </a>{' '}
                                    </Card.Text>
                                </ColorIconosStyled>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <h1>Esperando</h1>
        </MainLayout>
    );
}

const FuenteH3Styled = styled.div`
    font-family: 'Raleway', sans-serif;
`;

const ColorIconosStyled = styled.div`
    .fac {
        color: #1877f2;
    }
    .what {
        color: #3cb371;
    }
    .inst {
        color: #ba55d3;
    }
`;

export default CardView;

import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { URL } from '../../libs/url';

function HomeView(props) {
    const { data } = props;
    const uri = URL + `/proveedor/imagen/`;
    const [emprendedores, setEmprendedores] = useState(null);

    useEffect(() => {
        loadEmprendedores();
    });

    const loadEmprendedores = () => {
        setEmprendedores(data);
    };

    if (emprendedores) {
        return (
            <Container className="mt-4">
                <Row className="g-4">
                    {emprendedores.map((emprendedor, i) => {
                        return (
                            <Col className="mt-2" key={emprendedor._id}>
                                <Card
                                    style={{ width: '20rem' }}
                                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={uri + emprendedor._id}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {' '}
                                            {emprendedor.nombre}{' '}
                                        </Card.Title>
                                        <Card.Text>
                                            {' '}
                                            {emprendedor.msg_description}{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Servicio: {
                                                emprendedor.actividad
                                            }{' '}
                                        </Card.Text>

                                        <Card.Text>
                                            {' '}
                                            Ciudad: {emprendedor.ciudad}{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Me gusta: {emprendedor.likes}{' '}
                                        </Card.Text>

                                        <Link to={`/card/${emprendedor._id}`}>
                                            Ver mas...
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
    return (
        <div className="container" style={{ height: '500px' }}>
            <h1>No hay resultados de Busqueda</h1>
        </div>
    );
}

HomeView.propTypes = {};

export default HomeView;

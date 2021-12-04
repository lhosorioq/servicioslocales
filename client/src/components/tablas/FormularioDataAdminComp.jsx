import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
    nombre: yup
        .string()
        .min(4, 'Nombre muy corto min 4 caracteres')
        .max(20, 'Nombre muy largo max 20 caracteres')
        .required('Campo Nombre es requerido'),
    user: yup.string().email().required('Campo email es requerido'),
    password: yup
        .string()
        .min(8, 'Constraseña muy corta! min 8 caracteres')
        .max(20, 'Contraseña muy larga! max 20 caracteres')
        .required('Campo Contraseña es Requerido'),
});

function FormularioDataAdminComp(props) {
    const { admin, tittle, button, cargar, closeShow } = props;

    return (
        <Container style={{ margin: '30px' }}>
            <h2>{tittle}</h2>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => cargar(values)}
                initialValues={{
                    nombre: admin.nombre,
                    user: admin.user,
                    password: admin.password,
                }}
            >
                {({ handleSubmit, handleChange, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="11"
                                controlId="form1"
                                className="position-relative"
                            >
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre"
                                    name="nombre"
                                    defaultValue={admin.nombre}
                                    onChange={handleChange}
                                    isInvalid={!!errors.nombre}
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.nombre}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="11"
                                controlId="form2"
                                className="position-relative"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name="user"
                                    defaultValue={admin.user}
                                    onChange={handleChange}
                                    isInvalid={!!errors.user}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.user}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group
                                as={Col}
                                md="11"
                                controlId="form3"
                                className="position-relative"
                            >
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    name="password"
                                    defaultValue={admin.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />

                                <Form.Control.Feedback type="invalid" tooltip>
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col md={7} />
                            <Col md={2}>
                                <Button variant="outline-primary" type="submit">
                                    {button}
                                </Button>
                            </Col>
                            <Col md={2}>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => closeShow()}
                                >
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default FormularioDataAdminComp;

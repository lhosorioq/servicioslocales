import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Formik, Form, Field } from 'formik';
import {
    FormGroup,
    Col,
    FormLabel,
    Button,
    Row,
    Container,
    FormControl,
    InputGroup,
    FormCheck,
    Modal,
    ModalBody,
    Card,
    CardImg,
} from 'react-bootstrap';
import * as Yup from 'yup';
import Icon from '.././Icons/Icons';
import InputFiles from 'react-input-files';
import { Departamentos, Ciudades } from '../../libs/search.lib';
import { URL } from '../../libs/url';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Nombre muy corto!')
        .max(40, 'Nombre muy largo!')
        .required('Campo Requerido'),
    email: Yup.string().email('Invalid email').required('Campo Requerido'),
    telefono: Yup.number()
        .min(0, 'Numero muy corto!')
        .max(9999999999999, 'Numero muy largo!')
        .required('Campo Requerido'),
    password: Yup.string()
        .min(8, 'Constraseña muy corta!')
        .max(20, 'Contraseña muy larga!')
        .required('Campo Requerido'),
    direccion: Yup.string()
        .min(3, 'Direccion muy corta!')
        .max(40, 'Direccion muy largo!')
        .required('Campo Requerido'),
});

const carga = async (values, file, departamento, ciudad) => {
    const { nombre, telefono, email, password, direccion } = values;
    console.log(file)

    const data = new FormData();
    data.append('avatar', file);
    data.append('nombre', nombre);
    data.append('telefono', telefono);
    data.append('email', email);
    data.append('password', password);
    data.append('direccion', direccion);
    data.append('departamento', departamento);
    data.append('ciudad', ciudad);

    await Axios.post('user/create', data)
        .then((response) => {
            const auth = response.data.auth;
            if (!auth) {
                Swal.fire({
                    icon: 'error',
                    title: response.data.mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                console.log(response);
                const token = response.data.token;
                const id = response.data.id;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('rol', 'user')
                window.location.href = '/cliente'; //pendiente ruta de pagina a la que pasara despues de login

                Swal.fire({
                    icon: 'success',
                    title: response.data.mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
    return 'emprendedores';
};

// Creacion de options para selects
const options = (item, i) => (
    <option key={i} value={item}>
        {item}
    </option>
);

export const RegistroClientComp = () => {
    const [file, setFile] = useState({ name: '' });
    const [departamento, setDepartamento] = useState('Departamentos');
    const [ciudad, setCiudad] = useState('Ciudades');
    const [show, setShow] = useState(false);

    // Close modal
    const handleClose = () => {
        setShow(false);
    };

    return (
        <Container>
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    telefono: '',
                    password: '',
                    direccion: '',
                    terms: false,
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(values) => carga(values, file, departamento, ciudad)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form1"
                                className="position-relative"
                            >
                                <FormLabel>Nombres</FormLabel>
                                <Field
                                    name="nombre"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese nombre"
                                />
                                {touched.nombre && errors.nombre && (
                                    <div>{errors.nombre}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form2"
                                className="position-relative"
                            >
                                <FormLabel>Correo electronico</FormLabel>
                                <Field
                                    name="email"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese correo electronico"
                                />
                                {touched.email && errors.email && (
                                    <div>{errors.email}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form3"
                                className="position-relative"
                            >
                                <FormLabel>Telefono de contacto</FormLabel>
                                <Field
                                    name="telefono"
                                    className="form-control"
                                    type="number"
                                    placeholder="Ingrese telefono de contacto"
                                />
                                {touched.telefono && errors.telefono && (
                                    <div>{errors.telefono}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form4"
                                className="position-relative"
                            >
                                <FormLabel>Clave</FormLabel>
                                <Field
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Escriba su clave"
                                />
                                {touched.password && errors.password && (
                                    <div>{errors.password}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form5"
                                className="position-relative"
                                required
                            >
                                <FormLabel>Departamento</FormLabel>
                                <Field
                                    as="select"
                                    name={departamento}
                                    className="form-control"
                                    type="text"
                                    placeholder="Departamentos"
                                    onChange={(e) =>
                                        setDepartamento(e.target.value)
                                    }
                                >
                                    {Departamentos.map((item, i) =>
                                        item === 'Departamentos'
                                            ? ''
                                            : options(item, i)
                                    )}
                                </Field>
                                {touched.departamento &&
                                    errors.departamento && (
                                        <div>{errors.departamento}</div>
                                    )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form6"
                                className="position-relative"
                                required
                            >
                                <FormLabel>Ciudad</FormLabel>
                                <Field
                                    as="select"
                                    name={ciudad}
                                    className="form-control"
                                    type="text"
                                    placeholder="Ciudades"
                                    onChange={(e) => setCiudad(e.target.value)}
                                >
                                    {Ciudades[
                                        Departamentos.indexOf(departamento)
                                    ].map((item, i) => options(item, i))}
                                </Field>
                                {touched.ciudad && errors.ciudad && (
                                    <div>{errors.ciudad}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form7"
                                className="position-relative"
                            >
                                <FormLabel>Direccion</FormLabel>
                                <Field
                                    name="direccion"
                                    className="form-control"
                                    type="text"
                                    placeholder="Direccion de residencia o local"
                                />
                                {touched.direccion && errors.direccion && (
                                    <div>{errors.direccion}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form9"
                                className="position-relative"
                                required
                            >
                                {' '}
                                <FormLabel>
                                    Ingrese una imagen de perfil
                                </FormLabel>
                                <div>
                                    <InputFiles
                                        onChange={(files) =>
                                            setFile(files[0] ?? { name: '' })
                                        }
                                    >
                                        <InputGroup>
                                            <InputGroup.Text id="basic-addon1">
                                                <Icon className="fas fa-file-upload" />
                                            </InputGroup.Text>
                                            <FormControl
                                                placeholder={file.name}
                                                aria-label="file"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </InputFiles>
                                </div>
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form11"
                                className="position-relative"
                            >
                                <FormCheck
                                    name="terms"
                                    label="Aceptar terminos y condiciones"
                                    required
                                    feedbackType="invalid"
                                    feedbackTooltip
                                />
                            </FormGroup>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    variant="link"
                                    onClick={() => setShow(true)}
                                >
                                    Ver terminos y condiciones
                                </Button>
                            </Col>
                            <Col
                                md={{ span: 4, offset: 8 }}
                                className="d-grid gap-2"
                            >
                                <Button
                                    variant="outline-primary"
                                    type="submit"
                                    size="lg"
                                >
                                    Registrar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
            <Modal size="lg" show={show} onHide={handleClose}>
                <ModalBody>
                    <Card>
                        <CardImg src={URL + '/user/terminos'}></CardImg>{' '}
                    </Card>
                    <Button
                        as={Col}
                        md={{ span: 4, offset: 8 }}
                        variant="outline-primary"
                        style={{ marginTop: '10px' }}
                        onClick={handleClose}
                    >
                        Cerrar
                    </Button>
                </ModalBody>
            </Modal>
        </Container>
    );
};

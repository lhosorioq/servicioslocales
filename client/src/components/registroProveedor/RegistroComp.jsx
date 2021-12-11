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
import Icon from '../Icons/Icons';
import InputFiles from 'react-input-files';
import { Categorias, Departamentos, Ciudades } from '../../libs/search.lib';
import { URL } from '../../libs/url';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Nombre muy corto!')
        .max(40, 'Nombre muy largo!')
        .required('Campo Requerido'),
    mail: Yup.string().email('Invalid email').required('Campo Requerido'),
    telefono1: Yup.number()
        .min(0, 'Numero muy corto!')
        .max(9999999999999, 'Numero muy largo!')
        .required('Campo Requerido'),
    password: Yup.string()
        .min(8, 'Constraseña muy corta!')
        .max(20, 'Contraseña muy larga!')
        .required('Campo Requerido'),
    actividad: Yup.string().required('Campo Requerido'),
    direccion: Yup.string()
        .min(3, 'Direccion muy corta!')
        .max(40, 'Direccion muy largo!')
        .required('Campo Requerido'),
    msg_description: Yup.string()
        .min(10, 'Mensaje muy corto!')
        .max(500, 'Mensaje muy largo!')
        .required('Campo Requerido'),
});

const carga = async (values, file, departamento, ciudad) => {
    const {
        nombre,
        telefono1,
        telefono2,
        mail,
        password,
        actividad,
        direccion,
        msg_description,
        telegram,
        whatsapp,
        twitter,
        facebook,
        linkedin,
        instagram,
    } = values;

    const data = new FormData();
    data.append('img', file);
    data.append('nombre', nombre);
    data.append('telefono1', telefono1);
    data.append('telefono2', telefono2);
    data.append('mail', mail);
    data.append('password', password);
    data.append('actividad', actividad);
    data.append('direccion', direccion);
    data.append('msg_description', msg_description);
    data.append('departamento', departamento);
    data.append('ciudad', ciudad);
    data.append('telegram', telegram);
    data.append('whatsapp', whatsapp);
    data.append('twitter', twitter);
    data.append('facebook', facebook);
    data.append('linkedin', linkedin);
    data.append('instagram', instagram);

    await Axios.post('proveedor/create', data)
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
                const token = response.data.token;
                const id = response.data.id;
                sessionStorage.clear();
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('rol', 'empresa');
                window.location.href = '/proveedor'; //pendiente ruta de pagina a la que pasara despues de login

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
};

// Creacion de options para selects
const options = (item, i) => (
    <option key={i} value={item}>
        {item}
    </option>
);

export const RegistroComp = () => {
    const [file, setFile] = useState({ name: '' });
    const [departamento, setDepartamento] = useState('AMAZONAS');
    const [ciudad, setCiudad] = useState('');
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
                    mail: '',
                    telefono1: '',
                    telefono2: '',
                    password: '',
                    actividad: '',
                    direccion: '',
                    msg_description: '',
                    terms: false,
                    telegram: '',
                    whatsapp: '',
                    twitter: '',
                    facebook: '',
                    linkedin: '',
                    instagram: '',
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
                                <FormLabel>Nombre - Razon Social</FormLabel>
                                <Field
                                    name="nombre"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese nombre o la razon social"
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
                                    name="mail"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese correo electronico"
                                />
                                {touched.mail && errors.mail && (
                                    <div>{errors.mail}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form3"
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
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="3"
                                controlId="form4"
                                className="position-relative"
                            >
                                <FormLabel>Telefono de contacto 1</FormLabel>
                                <Field
                                    name="telefono1"
                                    className="form-control"
                                    type="number"
                                    placeholder="Ingrese telefono de contacto"
                                />
                                {touched.telefono1 && errors.telefono1 && (
                                    <div>{errors.telefono1}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="3"
                                controlId="form5"
                                className="position-relative"
                            >
                                <FormLabel>Telefono de contacto 2</FormLabel>
                                <Field
                                    name="telefono2"
                                    className="form-control"
                                    type="number"
                                    placeholder="Ingrese telefono de contacto"
                                />
                                {touched.telefono2 && errors.telefono2 && (
                                    <div>{errors.telefono2}</div>
                                )}
                            </FormGroup>

                            <FormGroup
                                as={Col}
                                md="3"
                                controlId="form6"
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
                                md="3"
                                controlId="form7"
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
                                    ].map((item, i) =>
                                        options(
                                            item === 'Ciudades'
                                                ? Ciudades[
                                                    Departamentos.indexOf(
                                                        departamento
                                                    )
                                                ][1]
                                                : item,
                                            i
                                        )
                                    )}
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
                                controlId="form8"
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
                            >
                                <FormLabel>Actividad</FormLabel>
                                <Field
                                    as="select"
                                    name="actividad"
                                    className="form-control"
                                    type="text"
                                    placeholder="Categorias"
                                >
                                    {Categorias.map((item, i) =>
                                        options(item, i)
                                    )}
                                </Field>
                                {touched.actividad && errors.actividad && (
                                    <div>{errors.actividad}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form10"
                                className="position-relative"
                                required
                            >
                                {' '}
                                <FormLabel>
                                    Ingrese una imagen corporativa
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
                                                // value={() => file.name}
                                                required={
                                                    file.name === ''
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </InputGroup>
                                    </InputFiles>
                                </div>
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="12"
                                controlId="form11"
                                className="position-relative"
                            >
                                <FormLabel>
                                    Mensaje Descriptivo o Slogan
                                </FormLabel>
                                <Field
                                    as="textarea"
                                    rows={3}
                                    name="msg_description"
                                    className="form-control"
                                    type="text"
                                    placeholder="Ingrese un mensaje descriptivo o slogan"
                                />
                                {touched.msg_description &&
                                    errors.msg_description && (
                                        <div>{errors.msg_description}</div>
                                    )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <hr />
                            <h4 style={{ textAlign: 'center' }}>
                                Redes sociales
                            </h4>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form12"
                                className="position-relative"
                            >
                                <FormLabel>Facebook</FormLabel>
                                <Field
                                    name="facebook"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enlace Facebook"
                                />
                                {touched.facebook && errors.facebook && (
                                    <div>{errors.facebook}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form13"
                                className="position-relative"
                            >
                                <FormLabel>Instagram</FormLabel>
                                <Field
                                    name="instagram"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enlace Instagram"
                                />
                                {touched.instagram && errors.instagram && (
                                    <div>{errors.instagram}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form14"
                                className="position-relative"
                            >
                                <FormLabel>Twitter</FormLabel>
                                <Field
                                    name="twitter"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enlace Twitter"
                                />
                                {touched.twitter && errors.twitter && (
                                    <div>{errors.twitter}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form15"
                                className="position-relative"
                            >
                                <FormLabel>Linkedin</FormLabel>
                                <Field
                                    name="linkedin"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enlace Linkedin"
                                />
                                {touched.linkedin && errors.linkedin && (
                                    <div>{errors.linkedin}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form16"
                                className="position-relative"
                            >
                                <FormLabel>Whatsapp</FormLabel>
                                <Field
                                    name="whatsapp"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enlace Whatsapp"
                                />
                                {touched.whatsapp && errors.whatsapp && (
                                    <div>{errors.whatsapp}</div>
                                )}
                            </FormGroup>
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form17"
                                className="position-relative"
                            >
                                <FormLabel>Telegram</FormLabel>
                                <Field
                                    name="telegram"
                                    className="form-control"
                                    type="text"
                                    placeholder="Enlace Telegram"
                                />
                                {touched.telegram && errors.telegram && (
                                    <div>{errors.telegram}</div>
                                )}
                            </FormGroup>
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="4"
                                controlId="form18"
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
                        <CardImg src={URL + '/proveedor/terminos'}></CardImg>{' '}
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

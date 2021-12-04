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
} from 'react-bootstrap';
import * as Yup from 'yup';
import Icon from '../Icons/Icons';
import InputFiles from 'react-input-files';
import { Categorias, Departamentos, Ciudades } from '../../libs/search.lib';

const DisplayingErrorMessagesSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Nombre muy corto!')
        .max(40, 'Nombre muy largo!'),
    mail: Yup.string().email('Invalid email'),
    telefono: Yup.number()
        .min(0, 'Numero muy corto!')
        .max(9999999999999, 'Numero muy largo!'),
    password: Yup.string()
        .min(8, 'Constraseña muy corta!')
        .max(20, 'Contraseña muy larga!'),
    actividad: Yup.string(),
    direccion: Yup.string()
        .min(3, 'Direccion muy corta!')
        .max(40, 'Direccion muy largo!'),
    msg_description: Yup.string()
        .min(10, 'Mensaje muy corto!')
        .max(500, 'Mensaje muy largo!'),
});

// Creacion de options para selects
const options = (item, i) => (
    <option key={i} value={item}>
        {item}
    </option>
);

const DataEmprendedorComp = (props) => {
    const { emprendedor, loadEmprendedor, url } = props;
    const [file, setFile] = useState({ name: '' });
    const [departamento, setDepartamento] = useState(emprendedor.departamento);
    const [ciudad, setCiudad] = useState(emprendedor.ciudad);

    const carga = async (values) => {
        const {
            nombre,
            telefono,
            mail,
            password,
            actividad,
            direccion,
            msg_description,
        } = values;

        const data = new FormData();
        data.append('img', file);
        data.append('nombre', nombre);
        data.append('telefono', telefono);
        data.append('mail', mail);
        data.append('password', password);
        data.append('actividad', actividad);
        data.append('direccion', direccion);
        data.append('msg_description', msg_description);
        data.append('departamento', departamento);
        data.append('ciudad', ciudad);

        const token = 'Bearer ' + sessionStorage.getItem('token');
        const id = emprendedor._id;

        await Axios.put(`/emprendedor/update/${id}`, data, {
            headers: { Authorization: token },
        })
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
                    Swal.fire({
                        icon: 'success',
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    loadEmprendedor();
                    url();
                }
            })
            .catch((err) => {
                console.log(err);
            });
        return 'emprendedores';
    };

    return (
        <Container>
            <Formik
                initialValues={{
                    nombre: emprendedor.nombre,
                    mail: emprendedor.mail,
                    telefono: emprendedor.telefono,
                    password: '',
                    actividad: emprendedor.actividad,
                    direccion: emprendedor.direccion,
                    msg_description: emprendedor.msg_description,
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(values) => carga(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="6"
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
                                md="6"
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
                        </Row>
                        <Row>
                            <FormGroup
                                as={Col}
                                md="6"
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
                            <FormGroup
                                as={Col}
                                md="6"
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
                        </Row>
                        <Row className="mb-3">
                            <FormGroup
                                as={Col}
                                md="6"
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
                                    defaultValue={departamento.toUpperCase()}
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
                                md="6"
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
                                    defaultValue={ciudad.toUpperCase()}
                                    onChange={(e) => setCiudad(e.target.value)}
                                >
                                    {Ciudades[
                                        Departamentos.indexOf(
                                            departamento.toUpperCase()
                                        )
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
                                md="6"
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
                                md="6"
                                controlId="form8"
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
                        </Row>
                        <Row>
                            <FormGroup
                                as={Col}
                                md="12"
                                controlId="form9"
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
                                controlId="form10"
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
                        <Row>
                            <Col
                                md={{ span: 4, offset: 8 }}
                                className="d-grid gap-2"
                            >
                                <Button
                                    variant="outline-primary"
                                    type="submit"
                                    size="lg"
                                >
                                    Guardar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default DataEmprendedorComp;

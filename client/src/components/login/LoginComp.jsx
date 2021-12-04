import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, FormLabel } from 'react-bootstrap';

function LoginComp(props) {
    const { login, registro } = props;

    const loginSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Minimo 8 caracteres')
            .max(15, 'Maximo 15 caracteres')
            .required('Campo requerido'),
        email: Yup.string()
            .email('No es un correo valido')
            .required('Campo requerido'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const data = values;
        resetForm({ values: { email: '', password: '' } });
        setSubmitting(false);
        login(data);
    };

    return (
        <div>
            <Container
                style={{ width: '300px', height: '200px', marginTop: '100px', marginBottom: '100px' }}
            >
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => {
                        return (
                            <Form>
                                <FormLabel
                                    style={{
                                        display: 'block',
                                        margin: '10px 0',
                                        textAlignLast: 'left',
                                    }}
                                >
                                    Email:{' '}
                                    <Field
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        style={{ display: 'block' }}
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                    />
                                </FormLabel>
                                <FormLabel
                                    style={{
                                        display: 'block',
                                        margin: '10px 0',
                                        textAlignLast: 'left',
                                    }}
                                >
                                    Password:
                                    <Field
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        style={{ display: 'block' }}
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                    />
                                </FormLabel>
                                <div className="d-grid gap-2">
                                    <button
                                        className="btn btn-primary btn-block"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div style={{ display: registro }}>
                                    <label
                                        style={{
                                            display: 'block',
                                            marginTop: '20px',
                                        }}
                                    >
                                        No tienes una cuenta? Registrate
                                    </label>
                                    <div className="d-grid gap-2">
                                        <a
                                            className="btn btn-primary btn-block mt-2"
                                            href='/signup'
                                        >
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </Container>
        </div>
    );
}

export default LoginComp;

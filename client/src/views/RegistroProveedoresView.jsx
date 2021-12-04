import React from 'react';
import { Container } from 'react-bootstrap';
// import { MainLayout } from '../styles/Layouts';
// import Title from '../components/Title';
import { RegistroComp } from '../components/registroProveedor/RegistroComp';

function RegistroView() {
    return (
        <Container>
            {/* <Title title={'registro'} span={'registro'} /> */}
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <RegistroComp />
        </Container>
    );
}

export default RegistroView;

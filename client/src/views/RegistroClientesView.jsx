import React from 'react';
import { Container } from 'react-bootstrap';
// import { MainLayout } from '../styles/Layouts';
// import Title from '../components/Title';
import {RegistroClientComp} from '../components/registroCliente/RegistroClientComp'

function RegistroClientesView() {
    return (
        <Container>
            {/* <Title title={'registro'} span={'registro'} /> */}
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <RegistroClientComp/>
        </Container>
    );
}

export default RegistroClientesView;

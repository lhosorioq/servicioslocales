import React from 'react';
import { MainLayout } from '../assets/Styles/Layouts';
import Title from '../components/Titulos/Title';
import {RegistroClientComp} from '../components/registroCliente/RegistroClientComp'

function RegistroClientesView() {
    return (
        <MainLayout>
            <Title title={'registro clientes'} span={'registro clientes'} />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <RegistroClientComp/>
        </MainLayout>
    );
}

export default RegistroClientesView;

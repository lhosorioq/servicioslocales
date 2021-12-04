import React from 'react';
import { MainLayout } from '../assets/Styles/Layouts';
import Title from '../components/Titulos/Title';
import { RegistroComp } from '../components/registroProveedor/RegistroComp';

function RegistroProveedoresView() {
    return (
        <MainLayout>
            <Title title={'registro empresas'} span={'registro empresas'} />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <RegistroComp />
        </MainLayout>
    );
}

export default RegistroProveedoresView;

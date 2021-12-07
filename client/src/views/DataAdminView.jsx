import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { MainLayout } from '../assets/Styles/Layouts';
import TablaClientesComp from '../components/tablas/TablaClientesComp';
import TablaEmprendedoresComp from '../components/tablas/TablaEmprendedoresComp';
import TableAdministradoresCom from '../components/tablas/TableAdministradoresCom';

function AdminEmprendedoresView() {
    const [key, setKey] = useState('proveedores');
    return (
        <MainLayout>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 mt-2"
            >
                <Tab eventKey="proveedores" title="Proveedores">
                    <TablaEmprendedoresComp />
                </Tab>
                <Tab eventKey="clientes" title="Clientes">
                    <TablaClientesComp />
                </Tab>
                <Tab eventKey="administradores" title="Administradores">
                    <TableAdministradoresCom />
                </Tab>
            </Tabs>
        </MainLayout>
    );
}

export default AdminEmprendedoresView;

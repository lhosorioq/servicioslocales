import React, { useState } from 'react';
import { Tabs, Tab, Container} from 'react-bootstrap';
import TablaClientesComp from '../components/tablas/TablaClientesComp';
import TablaEmprendedoresComp from '../components/tablas/TablaEmprendedoresComp';
import TableAdministradoresCom from '../components/tablas/TableAdministradoresCom';

function AdminEmprendedoresView() {
    const [key, setKey] = useState('proveedores');
    return (
        <Container>
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
        </Container>
    );
}

export default AdminEmprendedoresView;

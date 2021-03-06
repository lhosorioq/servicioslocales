import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardsComp from '../components/card/CardsComp';
import { ProgressBar } from 'react-bootstrap';
import SearchComp from '../components/busquedaFiltro/SearchComp';
import Home from '../components/Home/Home'
import { MainLayout } from '../assets/Styles/Layouts';


function HomeView() {
    const [emprendedores, setEmprendedores] = useState(null);

    const [imagenes, setImagenes] = useState(null);

    const loadProveedores = async (param) => {
        await Axios.post('/user/filter/', param)
            .then((response) => {
                setEmprendedores(response.data.proveedores);
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedores;
    };

    useEffect(() => {
        async function getEmprendedores() {
            if (!emprendedores) {
                try {
                    const response = await Axios({
                        method: 'get',
                        url: `/user/visible`,
                        responseType: 'json',
                    });
                    setEmprendedores(response.data.proveedores);

                    setImagenes(imagenes ?? response.data.proveedores);

                    return emprendedores;
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getEmprendedores();
    });

    if (emprendedores && imagenes) {
        return (
            <>
                <Home/>
                <SearchComp
                    loadProveedores={(item) => loadProveedores(item)}
                />
                <MainLayout>
                    <CardsComp data={emprendedores} />
                </MainLayout>
            </>
        );
    }
    return (
        <>
            <Home/>
            <SearchComp />
            <div className="container" style={{ height: '1000px', marginTop: '100px' }}>
                <h2>Cargando Datos</h2>
                <ProgressBar animated now={45} />
            </div>
            
        </>
    );
}

HomeView.propTypes = {};

export default HomeView;


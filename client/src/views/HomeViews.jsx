import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardsComp from '../components/card/CardsComp';
import { ProgressBar } from 'react-bootstrap';
import SearchComp from '../components/busquedaFiltro/SearchComp';
import Home from '../components/Home/Home'


function HomeView() {
    const [emprendedores, setEmprendedores] = useState(null);

    const [imagenes, setImagenes] = useState(null);

    const loadEmprendedores = async (param) => {
        await Axios.post('/user/filter/', param)
            .then((response) => {
                setEmprendedores(response.data.emprendedores);
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
                    setEmprendedores(response.data.emprendedores);

                    setImagenes(imagenes ?? response.data.emprendedores);

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
                    loadEmprendedores={(item) => loadEmprendedores(item)}
                />
                <div style={{ minHeight: '1000px' }}>
                    <CardsComp data={emprendedores} />
                </div>
            </>
        );
    }
    return (
        <>
            <Home/>
            <SearchComp />
            <div className="container" style={{ height: '1000px' }}>
                <ProgressBar animated now={45} />
            </div>
            
        </>
    );
}

HomeView.propTypes = {};

export default HomeView;


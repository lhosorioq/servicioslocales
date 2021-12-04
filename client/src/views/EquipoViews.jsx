import React, { Component } from 'react'
import { MainLayout } from '../assets/Styles/Layouts';
import Equipo from '../components/equipo/Equipo'


export default class EquipoViews extends Component {
    render() {
        return (
            <MainLayout>
                <Equipo />
            </MainLayout>
        )
    }
}



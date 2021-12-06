import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../assets/Styles/Layouts'
import Title from '../components/Titulos/Title'
import Button from '../components/contacto/Button'
import  Icon  from '../components/Icons/Icons'
import Contacto from '../components/contacto/Contacto'

const ContactoViews = () => {
    const phone = <Icon className="fas fa-phone-alt" /> 
    const email = <Icon className="fas fa-envelope" />
    const location = <Icon className="fas fa-map-marker-alt" />
    return (
        <MainLayout className="contenedor">
            <ContactPageStyled >
                <Title title={'Contacto'} span={'Contacto'} />
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Pongase en contacto con nosotros</h4>
                        </div>
                        <form  className="form">
                            <div className="form-field">
                                <label htmlFor="name">Escriba su nombre*</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >
                                Escriba su Correo Electronico*
                                </label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Escriba su asunto</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Escriba su mensaje*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <Button title={'Enviar mensaje'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <Contacto title={'Teléfono'} icon={phone} cont1={'+57 475-4785-2545'} cont2={'+57 663520283'} />
                        <Contacto title={'Email'} icon={email} cont1={'sueñosrealidad@call.com'} cont2={'sueñorealidad@gmail.com'} />
                        <Contacto title={'Dirección'} icon={location} cont1={'Calle del desarrollo'} cont2={'Colombia'} />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .name{
            color: var(--gris-claro);
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: #7ac0c0;
                padding: 1rem 0;
                font-size: 1.8rem;
                font-family: 'Raleway', sans-serif;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    font-size: 1.1em;
                    display: inline-block;
                    background-color: var(--primary-color);
                    padding:0 .5rem;
                    color: #7ac0c0;
                }
                input{

                    border: 1px solid var(--);

                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                    box-shadow: 0 0 5px rgb(0 0 0 / 75%);
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--blanco);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    box-shadow: 0 0 5px rgb(0 0 0 / 75%);
                }
            }
        }
    }
`;

export default ContactoViews

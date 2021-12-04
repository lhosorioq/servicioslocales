import React from 'react';
import Footer from './FooterItem';
import Icon from '../Icons/Icons';

function FooterComp() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Servicios</Footer.Title>
                        <Footer.Il>Registrar empresa</Footer.Il>
                        <Footer.Il>Registrar pesona</Footer.Il>
                        <Footer.Il>Registrar cliente</Footer.Il>
                        <Footer.Il>Ranking Calificaciones</Footer.Il>
                        <Footer.Link href="/admin">Administracion</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Contacto </Footer.Title>
                        <Footer.Il>Calle del desarrollo</Footer.Il>
                        <Footer.Il>+57 304-345-2597</Footer.Il>
                        <Footer.Il>hola@servicioslocales.osoqui.com</Footer.Il>
                        <Footer.Il>Colombia</Footer.Il>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Redes Sociales</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/nuestralocalidad" target="_blank" ><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="https://www.instagram.com/" target="_blank" ><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="https://twitter.com/ServiciosLocal1" target="_blank" ><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>
                    
                </Footer.Row>
                <Footer.Il className="footer-copyright text-center py-3">
                    &copy; {new Date().getFullYear()} Copyright: Proyecto Hackathon MisionTic & UTP 
                </Footer.Il>
            </Footer.Wrapper>
        </Footer>
    );
}

export default FooterComp;

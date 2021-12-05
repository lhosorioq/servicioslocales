import React from 'react';
import Footer from './FooterItem';
import corazonColombia from '../../assets/img/corazonColombia_30x38.png';

function FooterComp() {
    return (
        <Footer className="sl-footer">
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Patrocinadores</Footer.Title>
                        <Footer.Link href="https://mintic.gov.co/portal/inicio/" target="_blank">Min TIC</Footer.Link>
                        <Footer.Link href="https://www.uptc.edu.co/sitio/portal/" target="_blank">UTP</Footer.Link>
                        <Footer.Link href="https://reactjs.org/" target="_blank">Comunidad React</Footer.Link>
                        <Footer.Link href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">Comunidad Javascript</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Registro</Footer.Title>
                        <Footer.Link href="#">Empresas</Footer.Link>
                        <Footer.Link href="#">Personas</Footer.Link>
                        <Footer.Link href="#">Clientes</Footer.Link>
                        <Footer.Link href="#">Ranking Calificaciones</Footer.Link>
                        <Footer.Link href="/login-admin">Administrador</Footer.Link>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Contacto </Footer.Title>
                        <Footer.Il>Mountain View 1600 Amphitheatre</Footer.Il>
                        <Footer.Link href="tel:+573043452597">+57 304-345-2597</Footer.Link>
                        <Footer.Link href="mailto:hola@servicioslocal.osoqui.com">hola@servicioslocal.osoqui.com</Footer.Link>
                        <Footer.Il>Colombia</Footer.Il>
                        <Footer.Il><img src={corazonColombia} alt=""/></Footer.Il>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Redes Sociales</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/nuestralocalidad" target="_blank" >Facebook</Footer.Link>
                        <Footer.Link href="https://www.youtube.com/" target="_blank" >Youtube</Footer.Link>
                        <Footer.Link href="https://twitter.com/ServiciosLocal1" target="_blank" >Twitter</Footer.Link>
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

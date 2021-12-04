import React from 'react';
import Footer from './FooterItem';
import Icon from './Icons';

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
                        <Footer.Link href="/admin"><Icon className="fas fa-user-lock" />Admin</Footer.Link>
                    </Footer.Column>
                        
                    <Footer.Column>
                        <Footer.Title>Quienes Somos</Footer.Title>
                        <Footer.Il>
                            Somos un grupo de Emprendedores que por medio del conocimiento en desarrollo Web logramos plasmar una idea personal en un gran proyecto, para el beneficio de todas las comunidades en el pais.
                        </Footer.Il>
                    </Footer.Column>

                    <Footer.Column>
                        <Footer.Title>Contacto </Footer.Title>
                        <Footer.Il><Icon className="fas fa-map-marked-alt" />Calle del desarrollo</Footer.Il>
                        <Footer.Il><Icon className="fas fa-phone-alt" />+57 304-345-2597</Footer.Il>
                        <Footer.Il><Icon className="fas fa-envelope" />hola@servicioslocales.osoqui.com</Footer.Il>
                        <Footer.Il><Icon className="fas fa-map-marker-alt" />Colombia</Footer.Il>
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

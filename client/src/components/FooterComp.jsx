import React from 'react';

function FooterComp() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Servicios</Footer.Title>
                    <Footer.Il>Desarrollo web</Footer.Il>
                    <Footer.Il>Tiendas en linea</Footer.Il>
                    <Footer.Il>Mercado en linea</Footer.Il>
                    <Footer.Il>Sitios web corporativos</Footer.Il>
                    <Footer.Link href="/admin"><Icon className="fas fa-user-lock" />Admin</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Quienes Somos</Footer.Title>
                    <Footer.Il>Somos un grupo de desarrolladores que trabajamos codo a codo para hacer realidad tus proyectos e ideas</Footer.Il>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contacto </Footer.Title>
                    <Footer.Il><Icon className="fas fa-map-marked-alt" />Calle del desarrollo</Footer.Il>
                    <Footer.Il><Icon className="fas fa-phone-alt" />+57 475-4785-2545</Footer.Il>
                    <Footer.Il><Icon className="fas fa-envelope" />sueñosrealidad@call.com</Footer.Il>
                    <Footer.Il><Icon className="fas fa-map-marker-alt" />Colombia</Footer.Il>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/" target="_blank" ><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/" target="_blank" ><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://twitter.com/" target="_blank" ><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    
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

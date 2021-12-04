import React, {useState} from 'react'
import { Container,LogoSl, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper,} from './NavElements'
import  logo  from '../../assets/img/logosl.png'
import Icon from './../Icons/Icons'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
    return (
        <Container>
            <Wrapper>
            <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
                <Icon className="fas fa-bars"></Icon>
            </MobileIcon>
                <Menu open={showMobileMenu}>
                    <LogoSl>
                        <img src={logo} width="80" height="80" alt="" />
                    </LogoSl>
                    <MenuItem>
                        <MenuItemLink as={Link} to={'/'} >
                        Inicio
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink as={Link} to={'/acerca de'}>
                        Acerca de
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink as={Link} to={'/contacto'}>
                        Contacto
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink as={Link} to={'/equipo'}>
                        Equipo
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink as={Link} to={'/registro empresa'}>
                        Registro Empresa
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink as={Link} to={'/registro cliente'}>
                        Registro Cliente
                        </MenuItemLink>
                    </MenuItem> 
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Navbar

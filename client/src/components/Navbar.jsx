import React, {useState} from 'react'
import { Container,LogoSl, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper,} from './NavElements'
import  logo  from '../assets/img/logosl.png'
import Icon from './Icons/Icons'
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
                    
                        <MenuItem>
                        
                            <MenuItemLink as={Link} to={'/'}>
                            home
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/conocenos'}>
                            about
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/contacto'}>
                            about
                            </MenuItemLink>
                        </MenuItem>
                        
                        <LogoSl>
                        <img src={logo} width="130" height="130" alt="" />
                        </LogoSl>
                        
                        
                        
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/'}>
                                ole
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/login'}>
                            ve
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink as={Link} to={'/signup'}>
                            mirame
                            </MenuItemLink>
                            
                        </MenuItem>
                        
                        
                    </Menu>
                    
            </Wrapper>
            
        </Container>
        
    )
}





export default Navbar


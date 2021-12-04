import React, {useState} from 'react'
import { Container,LogoSl, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper,} from './NavElements'
import  logo  from '../assets/img/logosl.png'
import Icon from './Icons/Icons'




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
                        
                            <MenuItemLink >
                            home
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                            about
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                            about
                            </MenuItemLink>
                        </MenuItem>
                        
                        
                        <LogoSl>
                        <img src={logo} width="150" height="150" alt="" />
                        </LogoSl>
                        
                        
                        <MenuItem>
                            <MenuItemLink>
                            oleee
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                            oleee
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink>
                            mirame
                            </MenuItemLink>
                            
                        </MenuItem>
                        
                        
                    </Menu>
                    
            </Wrapper>
            
        </Container>
        
    )
}





export default Navbar


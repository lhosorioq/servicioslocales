import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
background-color: #7ac0c0;
box-shadow: 0 0 5px rgb(0 0 0 / 95%);


`;

export const Wrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 10vw;
align-items: center;
flex-wrap: wrap;
display:flex;
justify-content: space-around;

@media screen and (max-width: 980px ){
    margin: 10px;
    display:inline-block;
    left:100px;



}
`;



export const LogoSl = styled.div`
    display: block;
    width: 100px;
    height: 150px;
    background-position: top;
    background-size: 150px 150px;
    position: flex;
    top: 30px;
    left: 0;
    z-index: 20;
    transition: top 0.2s ease;
    transition: top 0.2s ease;
    left: 70%;
    margin-left: -45px;
    
`;

export const Menu = styled.ul`
height: 100%;
width:100%;
display: flex;
justify-content: space-around;
list-style: none;

@media screen and (max-width: 980px ){
    background-color:#7ac0c0 ;
    position: absolute;
    top: 105px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
}
`;

export const MenuItem = styled.li`
    
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;



@media screen and (max-width: 980px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

`;

export const MenuItemLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 0px;
padding: 0.5rem 2.5rem ;
color: #F6EDD8;
font-size: 1.3rem;
font-family: 'Righteous', cursive;
font-weight: 300;
text-transform: uppercase;
cursor: pointer;
transition: 0.5s all ease;

&:hover{
    color: ffffff;
    background-color: #4b9797;
    transition: 0.5s all ease;
}


@media screen and (max-width: 980px){
        width:100%;
        
    }

`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 980px){
        display:grid;
        cursor: pointer;
        color: #F6EDD8;
        
    }
`;
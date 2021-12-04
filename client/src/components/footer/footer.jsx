import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 10px;
    background: #212529;
    @media (max-width: 1000px) {
        padding: 20px 10px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 10px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 10px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const Link = styled.a`
    color: #fff;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        color: #00d9ff;
        transition: 500ms ease-in;
    }
`;

export const Title = styled.p`
    font-size: 18px;
    color: #00d9ff;
    margin-bottom: 10px;
`;

export const Il = styled.p`
    color: #fff;
    margin-bottom: 5px;
    font-size: 16px;
    text-decoration: none;
`;

export const Img = styled.img`
width: 20px;
`;
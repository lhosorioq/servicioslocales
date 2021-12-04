import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 10px;
    background: rgba(255, 99, 71, 0.9);
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
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    color: red;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 20px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const Link = styled.a`
    color: #000;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        color: #00d9ff;
        transition: 200ms ease-in;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    color: #FFF;
    margin-bottom: 10px;
`;

export const Il = styled.p`
    color: #000;
    margin-bottom: 8px;
    font-size: 16px;
    text-decoration: none;
`;
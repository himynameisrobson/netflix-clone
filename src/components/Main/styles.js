import styled from "styled-components";

export const MainWrapper = styled.header`
    height: 45vh;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 10%;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;    
    margin-left: 50px;
    padding: 20px;
`;

export const MovieTitle = styled.h1`
    font-size: 2.5rem;
    color: #d9d9d9;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 700;
    margin-top: 100px;
    margin-bottom: 5px;

    @media (max-width: 375px) {
        font-size: 2rem;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    font-size: 1.2rem;
    color: #d9d9d9;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 700;
    background-color: ${(props) => props.backgroundColor};

    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.onHoverColor};
    }

    @media (max-width: 375px) {
        font-size: 0.8rem;
    }

`;

export const Description = styled.p`
    font-size: 0.9rem;
    color: #d9d9d9;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;

    @media (max-width: 375px) {
        font-size: 0.5rem;
    }
`;

export const FadeBottom = styled.div`
    height: 45vh;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)
`;
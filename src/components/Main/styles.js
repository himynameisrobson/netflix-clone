import styled from "styled-components";

export const MainWrapper = styled.header`
    height: 40vh;
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-positon: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;    
    margin-left: 50px;
`;

export const MovieTitle = styled.h1`
    font-size: 3rem;
    color: #d9d9d9;
    font-family: 'Roboto', 'sans-serif'
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 5px;
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
    padding: 10px 10px;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.onHoverColor};
    }

`;

export const Description = styled.p`
    font-size: 0.9rem;
    color: #d9d9d9;
    font-family: 'Roboto', 'sans-serif';
    font-weight: 500;
`;
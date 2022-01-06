import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 15px 45px;
    z-index: 1;
    transition-timing-function: ease-in ;
    transition: all 0.5s;

    @media (max-width: 375px) {
        padding: 7px 21px;
    }
   
`;

export const ToggleWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 15px 45px;
    z-index: 1;
    transition-timing-function: ease-in;
    transition: all 0.5s;

    height: auto;
    width: 100%;
    background-color: #111;
   
`;

export const Logo = styled.img`
    width: 120px;
    height: auto;

    @media (max-width: 375px) {
        width: 80px;
        height: auto;
    }
`;




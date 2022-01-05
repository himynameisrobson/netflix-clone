import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
`;

export const MovieRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`

export const Poster = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 180px;
    margin-right: 10px;
    transition: transform 450ms;
    cursor: pointer;

    &:hover {
        transform: scale(1.08)
    }
`;
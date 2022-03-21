import styled from 'styled-components';

export const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
gap: 24px;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const Appname = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const SearchImg = styled.img`
width: 35px;
height: 30px;
`;

export const SearchInput = styled.input`
width: 230px;
height: 30px;
color: black;
font-size: 14px;
font-weight: 500;
margin-left: 0px;
border: none;
outline: none;
margin-left: 7px;
overflow: hidden;
align-items: center;
padding-left: 8px;
`;

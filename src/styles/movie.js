import styled from 'styled-components';

export const MoviesList = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieContainer = styled.figure`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 1em;
  margin: 1em;
  min-width: 400px;
  align-items: center;
  & > * + * {
  margin-top: 3em;
  }
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const MoviePoster = styled.img`

`;

export const MovieTitle = styled.h3`

`;

export const MovieOverview = styled.p`

`;

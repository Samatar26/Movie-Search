import styled from 'styled-components';
import { Field } from 'redux-form';

export const SearchBar = styled.input`
  width: 99%;
  padding: 0.75em 1em;
  background-color: #ebebe2;
  border-radius: 2px;
  border: none;
  font-size: inherit;
  transition: background-color 0.2s;
  transition: box-shadow 0.2s;
  &:focus{
    outline: none;
    box-shadow: 0 0 0 2px palevioletred;
  }
`;

export const MovieForm = styled.form`
  display: flex;
  margin-top: 0.5em;
  justify-content: center;
`;

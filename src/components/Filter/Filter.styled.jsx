import styled from '@emotion/styled';
export const FilterStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & input {
    margin-left: 10px;
    border-radius: 4px;
    border: 1px solid #77529e;
  }
  & .name {
    margin-left: 25px;
  }
  & button {
    padding: 5px 10px;
    background-color: #dcb5ff;
    color: #77529e;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }
  & button:hover {
    background-color: #77529e;
    color: #a5bdfd;
  }
`;

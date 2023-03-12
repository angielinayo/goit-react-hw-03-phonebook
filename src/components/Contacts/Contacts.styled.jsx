import styled from '@emotion/styled';
export const ContactList = styled.ul`
  margin: 20px auto;
  width: 400px;
  display: flex;
  flex-direction: column;
`;
export const Contact = styled.li`
  padding: 10px;
  display: flex;
`;

export const ContactInfo = styled.p`
  margin-right: 10px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  color: #77529e;
`;
export const DeleteButton = styled.button`
  padding: 5px 10px;

  background-color: #dcb5ff;
  color: #77529e;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 200ms ease-in-out, background-color 200ms ease-in;

  &:hover {
    background-color: #77529e;
    color: #a5bdfd;
  }
`;

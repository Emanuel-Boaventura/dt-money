import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${p => p.theme.gray900};
  padding: 2.5rem 0 7.5rem;

`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  `

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background-color: ${p => p.theme.green500};
    color: ${p => p.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
      background-color: ${p => p.theme.green700};
      transition: background-color 0.2s;
    }

`
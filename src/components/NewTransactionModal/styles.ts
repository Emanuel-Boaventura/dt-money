import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vw;
  inset: 0;
  background-color: rgba(0,0,0,0.75);



`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${p => p.theme.gray800};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  form{
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
      border-radius: 6px;
      border: 0;
      background-color: ${p => p.theme.gray900};
      color: ${p => p.theme.gray300};
      padding: 1rem;

      &::placeholder{
      color: ${p => p.theme.gray500};

      }
    }

    button[type='submit']{
      height: 58px;
      border: 0;
      background-color: ${p => p.theme.green500};
      color: ${p => p.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
      }


      &:not(:disabled):hover{
        background-color: ${p => p.theme.green700};
        transition: background-color 0.2s;
      }

    }
  }

`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  line-height: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${p => p.theme.gray500};

`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;

`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  background-color: ${p => p.theme.gray700};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${p => p.theme.gray300};

  svg{
    color: ${p => p.variant === 'income' ? p.theme.green300 : p.theme.red300};
  }

  &[data-state='unchecked']:hover{
    background-color: ${p => p.theme.gray600};
    transition: background-color 0.2s;

  }

  &[data-state='checked']{
    color: ${p => p.theme.white};
    background-color: ${p => p.variant === 'income' ? p.theme.green500 : p.theme.red500};

    svg{
      color: ${p => p.theme.white};
    }
  }
`
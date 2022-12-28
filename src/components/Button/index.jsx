import { ButtonContainer } from './style'

export function Button({ children, type }) {
  return (
    <ButtonContainer type={type} variant="contained">
      {children}
    </ButtonContainer>
  )
}

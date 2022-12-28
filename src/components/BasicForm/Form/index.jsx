import { Button } from '../../Button'
import { FormContainer } from './style'

export function Form({ children, onSubmit }) {
  return (
    <FormContainer onSubmit={onSubmit}>
      {children}
      <Button type="submit">Enviar</Button>
    </FormContainer>
  )
}

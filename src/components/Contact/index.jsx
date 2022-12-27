import iconMail from '../../../src/assets/iconMail.svg'
import iconPhone from '../../../src/assets/iconPhone.svg'
import iconPlace from '../../../src/assets/iconPlace.svg'
import iconWhatsapp from '../../../src/assets/iconWhatsapp.svg'
import { ItemContact } from './ItemContact'
import { ContactContainer } from './style'

export function Contact() {
  return (
    <ContactContainer>
      <h1>Informações de contato:</h1>

      <ItemContact icon={iconPlace}>
        <p>Localização</p>
        <span>Rio de Janiero | RJ</span>
        <span>Rua Professor Gabizo, 26</span>
        <span>Tijuca | 20271-061</span>
      </ItemContact>

      <ItemContact icon={iconPhone}>
        <p>Telefone</p>
        <span>21 2214-0113</span>
      </ItemContact>

      <ItemContact icon={iconWhatsapp}>
        <p>Whatsapp</p>
        <span>21 99570-3324</span>
      </ItemContact>

      <ItemContact icon={iconMail}>
        <p>E-mail</p>
        <span>comercial@infoideias.com.br</span>
      </ItemContact>
    </ContactContainer>
  )
}

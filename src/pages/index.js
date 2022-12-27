import { BasicForm } from '../components/BasicForm'
import { Contact } from '../components/Contact'
import { Title } from '../components/Title'
import {
  Columns,
  CustomHr,
  HomeContainer
} from '../styles/stylespages/stylehome'

export default function Home() {
  return (
    <HomeContainer>
      <Title>Não encontrou o que procurava?</Title>
      <CustomHr />
      <span>Preencha o formulário e retornaremos o contato.</span>

      <Columns>
        <BasicForm></BasicForm>

        <Contact />
      </Columns>
    </HomeContainer>
  )
}

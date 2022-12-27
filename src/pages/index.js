import { BasicForm } from '../components/BasicForm'
import { Contact } from '../components/Contact'
import { HomeContainer } from '../styles/stylespages/stylehome'

export default function Home() {
  return (
    <HomeContainer>
      <BasicForm></BasicForm>

      <Contact />
    </HomeContainer>
  )
}

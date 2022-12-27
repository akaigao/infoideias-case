import { Contact } from '../components/Contact'
import { ColumnRight, HomeContainer } from '../styles/stylespages/stylehome'

export default function Home() {
  return (
    <HomeContainer>
      <ColumnRight>Right</ColumnRight>

      <Contact />
    </HomeContainer>
  )
}

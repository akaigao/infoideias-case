import { BasicForm } from '../components/BasicForm'
import { Contact } from '../components/Contact'
import { Title } from '../components/Title'
import {
  Columns,
  CustomHr,
  HomeContainer
} from '../styles/stylespages/stylehome'

export default function Home({ neighborhoodApi }) {
  return (
    <HomeContainer>
      <Title>Não encontrou o que procurava?</Title>
      <CustomHr />
      <span>Preencha o formulário e retornaremos o contato.</span>

      <Columns>
        <BasicForm neighborhoodApi={neighborhoodApi} />

        <Contact />
      </Columns>
    </HomeContainer>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(
    'http://enderecos.metheora.com/api/cidade/7043/bairros'
  )
  const data = await response.json()
  const neighborhoodApi = data

  return {
    props: {
      neighborhoodApi
    },
    revalidate: 5
  }
}

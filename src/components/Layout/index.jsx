import Head from 'next/head'
import Image from 'next/image'
import myLogo from '../../../public/logoHorizontal.png'
import { Header } from '../Header'
import { MainContainer } from './style'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Formulário</title>
      </Head>

      <Header>
        <Image src={myLogo} alt="My logo" width={130} />
        <button>Home</button>
      </Header>

      <MainContainer>{children}</MainContainer>
    </>
  )
}

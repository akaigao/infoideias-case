import Head from 'next/head'
import Image from 'next/image'
import myLogo from '../../../public/logoHorizontalWhite.png'
import { Header } from '../Header'
import MenuMobile from '../MenuMobile'
import { Navbar } from '../Navbar'
import { MainContainer, MenuMainContainer, MenuMobileContainer } from './style'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Formulário</title>
      </Head>

      <Header>
        <Image src={myLogo} alt="My logo" width={130} />

        <MenuMainContainer>
          <Navbar />
        </MenuMainContainer>

        <MenuMobileContainer>
          <MenuMobile />
        </MenuMobileContainer>
      </Header>

      <MainContainer>{children}</MainContainer>
    </>
  )
}

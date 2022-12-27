import Head from 'next/head'
import { Header } from '../Header'
import { MainContainer } from './style'

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Formulário</title>
      </Head>

      <Header></Header>

      <MainContainer>{children}</MainContainer>
    </>
  )
}

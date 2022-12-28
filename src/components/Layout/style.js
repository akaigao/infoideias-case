import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px 0px;
`

export const MenuMainContainer = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`

export const MenuMobileContainer = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
  }
`

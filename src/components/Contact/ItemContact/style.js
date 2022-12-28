import styled from 'styled-components'
import { Box } from '../../../styles/globals'

export const ItemContactContainer = styled.div`
  min-width: 100%;
  padding: 30px 0px;

  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;

  hr {
    width: 100%;

    color: #fff;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const BoxLabels = styled(Box)`
  p {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 10px;
  }

  span {
    color: #ffffffbd;
    word-break: break-all;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

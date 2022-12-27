import styled from 'styled-components'
import { Box } from '../globals'

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CustomHr = styled.hr`
  width: 5%;
  margin-bottom: 20px;
  border: 1px solid;
  color: #f49431;
`

export const Columns = styled(Box)`
  margin-top: 50px;
  flex-direction: row;
`

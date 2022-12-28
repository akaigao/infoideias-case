import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const ButtonContainer = styled(Button)`
  background-color: #f49431;
  color: #000;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    color: #f49431;
    border: 1px solid #f49431;
    transition: 0.3s;
  }
`

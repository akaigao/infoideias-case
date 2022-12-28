import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { useState } from 'react'
import { ItemMenuMobile } from './ItemMenuMobile'
import { ButtonMenuMobile } from './style'

export default function MenuMobile() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ItemMenuMobile text="Início" href="/" />
        <ItemMenuMobile text="Contato" href="/" />
        <ItemMenuMobile text="Área do Cliente" href="/" />
      </List>
    </Box>
  )

  return (
    <div>
      <ButtonMenuMobile onClick={toggleDrawer('right', true)}>
        Menu
      </ButtonMenuMobile>
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  )
}

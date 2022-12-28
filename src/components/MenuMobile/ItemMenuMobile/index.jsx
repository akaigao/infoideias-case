import { ListItem, ListItemButton } from '@mui/material'
import { Item } from './stye'

export function ItemMenuMobile({ text, href }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <a style={{ textDecoration: 'none' }} href={href}>
          <Item primary={text} />
        </a>
      </ListItemButton>
    </ListItem>
  )
}

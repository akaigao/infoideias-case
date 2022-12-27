import { ListItems, SpecialLi } from './style'

export function Navbar() {
  return (
    <nav>
      <ListItems>
        <li>
          <a href="/"></a>Início
        </li>
        <li>
          <a href="/"></a>Contato
        </li>
        <SpecialLi>
          <a href="/"></a>Área do Cliente
        </SpecialLi>
      </ListItems>
    </nav>
  )
}

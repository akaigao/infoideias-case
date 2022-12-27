import styled from 'styled-components'

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25px;

  li {
    list-style: none;
    font-size: 0.9em;
    transition: 0.2s;

    cursor: pointer;

    :hover {
      color: #fff;
      transition: 0.2s;
    }

    a {
      text-decoration: none;
    }
  }
`

export const SpecialLi = styled.li`
  padding: 15px 25px;
  background-color: #fff;
  transition: 0.5s;

  :hover {
    background-color: #000;
    color: #fff;
    transition: 0.5s;
  }
`

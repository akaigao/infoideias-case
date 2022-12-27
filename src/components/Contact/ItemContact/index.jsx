import Image from 'next/image'
import { Box } from '../../../styles/globals'
import { BoxLabels, ItemContactContainer } from './style'

export function ItemContact({ icon, children }) {
  return (
    <ItemContactContainer>
      <Box>
        <Image src={icon} alt="icon place" height={60} />
      </Box>

      <BoxLabels>{children}</BoxLabels>

      <hr />
    </ItemContactContainer>
  )
}

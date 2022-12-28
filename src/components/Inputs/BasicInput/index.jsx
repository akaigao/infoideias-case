import { TextField } from '@mui/material'
import { useController } from 'react-hook-form'
import { InputsContainer } from '../style'

export function BasicInput({ control, name, label, rules }) {
  const {
    field: { value, onChange }
  } = useController({ control, name, label, rules })

  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <InputsContainer>
      <TextField
        fullWidth
        value={value}
        id={label}
        label={label}
        variant="standard"
        onChange={handleChange}
      />
    </InputsContainer>
  )
}

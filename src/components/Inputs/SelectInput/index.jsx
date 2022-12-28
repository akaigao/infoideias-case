import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useController } from 'react-hook-form'
import { InputsContainer } from '../style'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

export function SelectInput({ control, name, label, options, rules }) {
  const {
    field: { value, onChange }
  } = useController({ control, name, label, rules })

  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <InputsContainer>
      <FormControl fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          sx={{ maxWidth: 450 }}
          labelId={label}
          id={label}
          multiple
          value={value}
          label={label}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {options.map(item => {
            return (
              <MenuItem key={item.Id} value={item.Nome}>
                {item.Nome}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </InputsContainer>
  )
}

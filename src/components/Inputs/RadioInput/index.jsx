import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { useController } from 'react-hook-form'
import { InputsContainer } from '../style'

export function RadioInput({ control, name, label, options, rules }) {
  const {
    field: { value, onChange }
  } = useController({ control, name, label, options, rules })

  const handleChange = newValue => {
    onChange(newValue)
  }

  return (
    <InputsContainer>
      <FormControl fullWidth>
        <FormLabel id={label}>{label}</FormLabel>
        <RadioGroup row aria-labelledby={label} value={value}>
          {options.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                value={item}
                control={<Radio />}
                label={item}
                onChange={handleChange}
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </InputsContainer>
  )
}

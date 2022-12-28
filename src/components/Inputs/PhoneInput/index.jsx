import { TextField } from '@mui/material'
import { useController } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { InputsContainer } from '../style'

export function PhoneInput({ control, name, label, rules }) {
  const {
    field: { value, onChange }
  } = useController({ control, name, label, rules })

  const handleChange = e => {
    onChange(e.target.value)
  }

  const materialUITextFieldProps = {
    variant: 'standard',
    label,
    fullWidth: true
  }

  return (
    <InputsContainer>
      <PatternFormat
        value={value}
        format="(##) #####-####"
        allowEmptyFormatting={false}
        customInput={TextField}
        {...materialUITextFieldProps}
        onChange={handleChange}
      />
    </InputsContainer>
  )
}

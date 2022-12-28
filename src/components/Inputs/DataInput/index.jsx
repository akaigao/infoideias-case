import { TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useController } from 'react-hook-form'
import { InputsContainer } from '../style'

export function DateInput({ control, name, label, rules }) {
  const {
    field: { value, onChange }
  } = useController({ control, name, label, rules })

  const handleChange = newValue => {
    onChange(newValue)
  }

  return (
    <InputsContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={params => (
            <TextField {...params} fullWidth variant="standard" />
          )}
        />
      </LocalizationProvider>
    </InputsContainer>
  )
}

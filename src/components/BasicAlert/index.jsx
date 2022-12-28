import { Alert, Stack } from '@mui/material'

export function BasicAlert({ style, severity, message, show }) {
  return (
    <Stack sx={{ marginTop: 2, width: '100%' }}>
      <Alert onClose={() => show(false)} severity={severity}>
        {message}
      </Alert>
    </Stack>
  )
}

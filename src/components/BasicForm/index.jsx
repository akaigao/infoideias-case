import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { validate11Digits } from '../../utils/validation.js'
import { BasicAlert } from '../BasicAlert'
import { BasicInput } from '../Inputs/BasicInput'
import { DateInput } from '../Inputs/DataInput'
import { PhoneInput } from '../Inputs/PhoneInput'
import { RadioInput } from '../Inputs/RadioInput'
import { SelectInput } from '../Inputs/SelectInput'
import { DividerInputs } from '../Inputs/style'
import { Form } from './Form'
import { BasicFormContainer } from './style'

export function BasicForm({ neighborhoodApi }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      tel: '',
      birthday: null,
      neighborhood: [],
      contactPeriod: '',
      contactAuth: ''
    },
    mode: 'onChange'
  })

  const [showAlert, setShowAlert] = useState(false)
  const [severityAlert, setSeverityAlert] = useState('')
  const [messageAlert, setMessageAlert] = useState('')

  const onSubmit = data => {
    console.log(data)

    if (Object.values(errors).length === 0) {
      setSeverityAlert('success')
      setMessageAlert('Formulário enviado! Aguarde nosso contato =)')
      setShowAlert(true)

      reset({
        name: '',
        email: '',
        tel: '',
        birthday: null,
        neighborhood: [],
        contactPeriod: '',
        contactAuth: ''
      })
    }

    alert(JSON.stringify(data))
  }
  const onError = data => {
    if (data.tel) {
      if (data.tel.type === 'checkLength') {
        setSeverityAlert('warning')
        setMessageAlert('O campo número deve conter 11 dígitos =D')
        setShowAlert(true)
        return
      }
    }

    if (data.email) {
      if (data.email.type === 'pattern') {
        setSeverityAlert('warning')
        setMessageAlert(data.email.message)
        setShowAlert(true)
        return
      }
    }

    if (Object.values(data).length >= 0) {
      setSeverityAlert('error')
      setMessageAlert('Todos os campos são obrigatórios =(')
      setShowAlert(true)
      return
    }
  }

  return (
    <BasicFormContainer>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <DividerInputs>
          <BasicInput
            control={control}
            name="name"
            label="Nome"
            rules={{ required: true }}
          />
          <BasicInput
            control={control}
            name="email"
            label="E-mail"
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Digite um e-mail válido =)'
              }
            }}
          />
        </DividerInputs>

        <DividerInputs>
          <PhoneInput
            control={control}
            name="tel"
            label="Telefone"
            rules={{
              required: true,
              validate: { checkLength: v => validate11Digits(v) }
            }}
          />

          <DateInput
            control={control}
            name="birthday"
            label="Data de Nascimento"
            rules={{ required: true }}
          />
        </DividerInputs>

        <DividerInputs>
          <SelectInput
            control={control}
            name="neighborhood"
            label="Bairros"
            options={neighborhoodApi}
            rules={{ required: true }}
          />
        </DividerInputs>

        <DividerInputs>
          <RadioInput
            control={control}
            name="contactPeriod"
            label="Período para Contato"
            options={['MANHÃ', 'TARDE', 'NOITE']}
            rules={{ required: true }}
          />
        </DividerInputs>

        <DividerInputs>
          <RadioInput
            control={control}
            name="contactAuth"
            label="Autoriza contato por telefone"
            options={['SIM', 'NÃO']}
            rules={{ required: true }}
          />
        </DividerInputs>
      </Form>

      {showAlert && (
        <BasicAlert
          severity={severityAlert}
          message={messageAlert}
          show={setShowAlert}
        />
      )}
    </BasicFormContainer>
  )
}

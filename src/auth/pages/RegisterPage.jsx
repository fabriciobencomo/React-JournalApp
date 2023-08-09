import { Grid, TextField, Typography, Button, Link, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks'

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { status, errorMsg } = useSelector(state => state.auth)
  
  const isCheckingAuth = useMemo(() => {
    status === 'checking'
  }, [status])

  const [formSubmitted, setformSubmitted] = useState(false)

  const formData = {
    email: 'ejemplo@ejemplo.com',
    password: '123',
    displayName: ''
  }

  const formValidations = {
    email: [(value) => value.includes('@'), 'el correo debe tener una arroba'],
    password: [(value) => value.length >= 6, 'el password debe ser mayor a 6'],
    displayName: [(value) => value.length >= 1, 'el nombre es obligatorio'],
  }
  const { displayName, email, password, onInputChange, formState, isFormValid, emailValid, passwordValid, displayNameValid} = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setformSubmitted(true)
    if(!isFormValid) return
    dispatch(startCreatingUserWithEmailAndPassword(formState))
  }
  return (
      <AuthLayout title='Register'>
        <form onSubmit={(e) => onSubmit(e)} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <TextField label="Nombre" placeholder='Name' type='text'  fullWidth name='displayName' value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={displayNameValid} ></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label="Correo" placeholder='google.com' type='email'  fullWidth name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={emailValid} ></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label="Password"  type='password'  fullWidth name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={passwordValid} ></TextField>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: 2, marginTop:1}}>
              <Grid item xs={12} display={ !!errorMsg ? '' : 'none'}>
                <Alert severity='error'>
                  {errorMsg}
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth disabled={isCheckingAuth}>
                  Registarse
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Ya tienes Cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresa
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

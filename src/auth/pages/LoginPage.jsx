import { Google } from '@mui/icons-material'
import { Grid, TextField, Typography, Button, Link, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  
  const {status, errorMsg} = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const { email, password, onInputChange, onResetForm, formState} = useForm(formData)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startLoginWithEmailAndPassword({email, password}))
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
  }

  return (
      <AuthLayout title='Login'>
        <form onSubmit={(e) => onSubmit(e)} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <TextField label="Correo" placeholder='google.com' type='email' name='email' onChange={ onInputChange } fullWidth value={email}></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label="Password"  type='password'  fullWidth name='password' onChange={ onInputChange } value={password}></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <Grid item xs={12} display={ !!errorMsg ? '' : 'none'}>
                <Alert severity='error'>
                  {errorMsg}
                </Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: 2, marginTop:1}}>
              <Grid item xs={12} sm={6}>
                <Button type='submit' variant='contained' fullWidth disabled={isAuthenticating}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button onClick={onGoogleSignIn} variant='contained' fullWidth disabled={isAuthenticating}>
                  <Google></Google>
                  <Typography sx={{marginLeft:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="#">
                Crea Una Cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

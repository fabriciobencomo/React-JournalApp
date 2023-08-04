import { Google } from '@mui/icons-material'
import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
      <AuthLayout title='Register'>
        <form>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <TextField label="Nombre" placeholder='Name' type='text'  fullWidth></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label="Correo" placeholder='google.com' type='email'  fullWidth></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label="Password"  type='password'  fullWidth></TextField>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: 2, marginTop:1}}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
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

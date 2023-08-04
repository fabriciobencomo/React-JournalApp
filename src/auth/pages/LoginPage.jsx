import { Google } from '@mui/icons-material'
import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
      <AuthLayout title='Login'>
        <form>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <TextField label="Correo" placeholder='google.com' type='email'  fullWidth></TextField>
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField label="Password"  type='password'  fullWidth></TextField>
            </Grid>
            <Grid container spacing={2} sx={{marginBottom: 2, marginTop:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  <Google></Google>
                  <Typography sx={{marginLeft:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Crea Una Cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

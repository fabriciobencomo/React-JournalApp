import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid container 
      className='animate__animated animate__fadeIn animate__faster'
      spacing={0} 
      direction="column" 
      alignItems='center' 
      justifyContent='center' 
      sx={{minHeight:'100vh', backgroundColor: 'primary.main', borderRadius: 5 }}>

        <Grid item xs={12}>
          <StarOutline sx={{fontSize: 100, color:"white"}}></StarOutline>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" color='white'>Selecciona o Crea Una Entrada</Typography>
        </Grid>
    </Grid>
  )
}

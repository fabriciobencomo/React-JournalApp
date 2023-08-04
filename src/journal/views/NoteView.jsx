import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1, }}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          28 de Agosoto de 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{p:2}}>
          <SaveOutlined sx={{fontSize: 30, mr:1}}></SaveOutlined>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField type="text" placeholder="Ingrese Un Titulo" variant="filled" fullWidth sx={{border:'none', mb:1}} label='titulo'></TextField>
        <TextField type="text" placeholder="Descripcion" multiline variant="filled" fullWidth minRows={5}></TextField>
      </Grid>
      <ImageGallery></ImageGallery>
    </Grid>
  )
}

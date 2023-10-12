import { DeleteOutlined, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from '../../hooks/useForm'
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSavingNote, startUploadingFiles, startDeletingNote } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch = useDispatch()
  const {active:note, messageSaved, isSaving} = useSelector( state => state.journal)
  const {title, body, date, onInputChange, formState} = useForm( note )

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if(messageSaved.length > 0){
      Swal.fire('Nota Actualizada', messageSaved, 'success')
    }
  }, [messageSaved])
  
  
  const onSaveNote = () => {
    dispatch(startSavingNote())
  }

  const onFileInputChange = ({target}) => {
    if(target.files.length == 0) return
    dispatch(startUploadingFiles(target.files))
  }

  const OnDeleteNote = () => {
    dispatch(startDeletingNote())
  }

  const fileInputRef = useRef()


  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1, }} className='animate__animated animate__fadeIn animate__faster'>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input type="file" multiple onChange={onFileInputChange} style={{display:'none'}} ref={fileInputRef}></input>
        <IconButton color="primary" disabled={ isSaving } onClick={ () => fileInputRef.current.click()}>
          <UploadOutlined></UploadOutlined>
        </IconButton>
        <Button color="primary" sx={{p:2}} onClick={onSaveNote} disabled={isSaving}>
          <SaveOutlined sx={{fontSize: 30, mr:1}}></SaveOutlined>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField type="text" placeholder="Ingrese Un Titulo" variant="filled" fullWidth sx={{border:'none', mb:1}} label='titulo' name="title" value={title} onChange={ onInputChange }></TextField>
        <TextField type="text" placeholder="Descripcion" multiline variant="filled" fullWidth minRows={5} name="body" value={body} onChange={ onInputChange } ></TextField>
      </Grid>
      <Grid container justifyContent='end'>
        <Button onClick={OnDeleteNote} sx={{mt:2}} color="error">
          <DeleteOutlined ></DeleteOutlined>
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls}></ImageGallery>
    </Grid>
  )
}

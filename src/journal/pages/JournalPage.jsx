import { IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { savingNewNote } from "../../store/journal/journalSlice"



export const JournalPage = () => {

  const {isSaving, active} = useSelector(state => state.journal)
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(savingNewNote())
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {
        (active != null)
        ? <NoteView></NoteView>
        : <NothingSelectedView></NothingSelectedView>
      }
      <IconButton 
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large" sx={{
        color: 'white', 
        backgroundColor: 'error.main', 
        ":hover": {backgroundColor: 'error.main', opacity:0.9}, 
        position:'fixed',
        right: 50,
        bottom: 50
        }}>
        <AddOutlined sx={{fontSize: 30}}></AddOutlined>
      </IconButton>
    </JournalLayout>
  )
}

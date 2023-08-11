import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // actived: {
        //   id: 1,
        //   title: '',
        //   body: '',
        //   date: 123,
        //   imagesUrl: []
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.active = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload) 
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
    }
});
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNote, deleteNoteById, savingNewNote } = journalSlice.actions;
import React from 'react';
import useInputState from '../../hooks/useInputState';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditMovieForm({ id, title, editMovie, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(title);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editMovie(id, value);
                reset();
                toggleIsEditing();
            }}
        >
            <TextField variant="standard" value={value} onChange={handleChange} />
            <Button
                variant="contained"
                size="small"
                type="submit"
                aria-label="Submit"
            >
                Submit
            </Button>
        </form>
    );
};
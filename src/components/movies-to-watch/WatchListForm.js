import React from 'react';
import useInputState from '../../hooks/useInputState';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function WatchListForm({ addMovie }) {
    const [value, handleChange, reset] = useInputState("");

    return (
        <div>
            <form
                style={{ marginTop: "1rem" }}
                onSubmit={e => {
                    e.preventDefault();
                    addMovie(value);
                    reset();
                }}
            >
                <TextField
                    value={value}
                    onChange={handleChange}
                    label="Add a movie to watch"
                    fullWidth
                />
                <Button type="submit" variant="contained">Add Movie</Button>
            </form>
        </div >
    );
};
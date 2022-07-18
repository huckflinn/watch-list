import React from 'react';
import useInputState from '../../hooks/useInputState';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditDislikedForm({ id, title, editDisliked, toggleIsEditingDisliked }) {
    const [value, handleChange, reset] = useInputState(title);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editDisliked(id, value);
                reset();
                toggleIsEditingDisliked();
            }}
        >
            <TextField value={value} onChange={handleChange} fullWidth />
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
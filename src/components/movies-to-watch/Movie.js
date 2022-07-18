import React from 'react';
import useToggleState from '../../hooks/useToggleState';
import EditMovieForm from './EditMovieForm';
import { ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Movie({
    id,
    title,
    watched,
    toggleWatched,
    editMovie,
    removeMovie
}) {
    const [isEditing, toggleIsEditing] = useToggleState(false);

    return (
        <ListItem sx={{ padding: "1.05rem", backgroundColor: watched ? "azure" : "white", cursor: "pointer" }}>
            {isEditing
                ?
                <EditMovieForm
                    id={id}
                    title={title}
                    editMovie={editMovie}
                    toggleIsEditing={toggleIsEditing}
                />
                :
                <>
                    <ListItemText onClick={() => toggleWatched(id)}>
                        {title}
                    </ListItemText>
                    <StarIcon
                        aria-label="Star"
                        style={{ fontSize: "large", cursor: "pointer" }}
                    />
                    <SentimentVeryDissatisfiedIcon
                        aria-label="Sadface"
                        style={{ fontSize: "large", marginLeft: "0.5rem" }}
                    />
                    <EditIcon
                        aria-label="Edit"
                        onClick={() => toggleIsEditing()}
                        style={{ fontSize: "large", marginLeft: "0.5rem" }}
                    />
                    <DeleteIcon
                        aria-label="Delete"
                        onClick={() => removeMovie(id)}
                        style={{ fontSize: "large", marginLeft: "0.5rem" }}
                    />
                </>
            }
        </ListItem>
    );
};
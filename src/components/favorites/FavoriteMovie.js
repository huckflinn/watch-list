import React from 'react';
import useToggleState from '../../hooks/useToggleState';
import EditFavoriteForm from './EditFavoriteForm';
import { ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function FavoriteMovie({ id, title, removeFavorite, editFavorite }) {
    const [isEditingFavorite, toggleIsEditingFavorite] = useToggleState(false);
    return (
        <ListItem>
            {isEditingFavorite
                ?
                <EditFavoriteForm
                    id={id}
                    title={title}
                    editFavorite={editFavorite}
                    toggleIsEditingFavorite={toggleIsEditingFavorite}
                />
                :
                <>
                    <ListItemText>
                        {title}
                    </ListItemText>
                    <EditIcon
                        aria-label="Edit"
                        onClick={() => toggleIsEditingFavorite()}
                        style={{ fontSize: "large", marginLeft: "0.5rem", cursor: "pointer" }}
                    />
                    <DeleteIcon
                        aria-label="Delete"
                        onClick={() => removeFavorite(id)}
                        style={{ fontSize: "large", marginLeft: "0.5rem", cursor: "pointer" }}
                    />
                </>
            }
        </ListItem>
    );
};
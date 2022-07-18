import React from 'react';
import useToggleState from '../../hooks/useToggleState';
import EditDislikedForm from './EditDislikedForm';
import { ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DislikedMovie({ id, title, editDisliked, removeDisliked }) {
    const [isEditingDisliked, toggleIsEditingDisliked] = useToggleState(false);
    return (
        <ListItem>
            {isEditingDisliked
                ?
                <EditDislikedForm
                    id={id}
                    title={title}
                    editDisliked={editDisliked}
                    toggleIsEditingDisliked={toggleIsEditingDisliked}
                />
                :
                <>
                    <ListItemText>
                        {title}
                    </ListItemText>
                    <EditIcon
                        aria-label="Edit"
                        onClick={() => toggleIsEditingDisliked()}
                        style={{ fontSize: "large", marginLeft: "0.5rem", cursor: "pointer" }}
                    />
                    <DeleteIcon
                        aria-label="Delete"
                        onClick={() => removeDisliked(id)}
                        style={{ fontSize: "large", marginLeft: "0.5rem", cursor: "pointer" }}
                    />
                </>
            }
        </ListItem>
    );
};
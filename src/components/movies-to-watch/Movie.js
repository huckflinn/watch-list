import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Movie({ title }) {
    return (
        <ListItem sx={{ padding: "1.05rem", cursor: "pointer" }}>
            <>
                <ListItemText>
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
                    style={{ fontSize: "large", marginLeft: "0.5rem" }}
                />
                <DeleteIcon
                    aria-label="Delete"
                    style={{ fontSize: "large", marginLeft: "0.5rem" }}
                />
            </>
        </ListItem>
    );
};
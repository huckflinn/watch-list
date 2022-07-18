import React from 'react';
import DislikedMovie from './DislikedMovie';
import { Paper, Typography, List, Divider } from '@mui/material';

function DislikedList({ dislikedMovies, removeDisliked, editDisliked }) {
    return (
        <Paper>
            <Typography sx={{
                fontSize: "1.5rem",
                color: "white",
                padding: "1rem",
                backgroundColor: "#d9534f",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px"
            }}>
                Unspeakable Garbage
            </Typography>
            <Divider />
            <List sx={{ padding: 0 }} style={{ height: 235, overflow: "scroll" }}>
                {dislikedMovies.map(badMovie => (
                    <>
                        <DislikedMovie
                            key={badMovie.id}
                            id={badMovie.id}
                            title={badMovie.title}
                            editDisliked={editDisliked}
                            removeDisliked={removeDisliked}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper >
    );
};

export default DislikedList;
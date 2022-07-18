import React from 'react';
import Movie from './Movie';
import { Paper, Typography, List, Divider } from '@mui/material';

export default function WatchList({ movies }) {
    return (
        <Paper>
            <Typography sx={{
                fontSize: "1.5rem",
                color: "white",
                padding: "1rem",
                backgroundColor: "#0275d8",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px"
            }}>
                Movies to Watch
            </Typography>
            <Divider />
            <List sx={{ padding: 0 }} style={{ height: 525, overflow: "scroll" }}>
                {movies.map(movie => (
                    <>
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            watched={movie.watched}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
};
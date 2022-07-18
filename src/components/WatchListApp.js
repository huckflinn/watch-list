import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppBar from './AppBar';
import WatchList from './movies-to-watch/WatchList';
import { Container, Grid } from '@mui/material';

export default function WatchListApp() {
    const initialMovies = [
        { id: uuidv4(), title: "Everything Everywhere All at Once", watched: false },
        { id: uuidv4(), title: "The Sea Beast", watched: false },
        { id: uuidv4(), title: "The Bob's Burgers Movie", watched: false }
    ]
    const [movies, setMovies] = useState(initialMovies);

    const addMovie = newMovieTitle => {
        if (newMovieTitle === "") {
            alert("Please enter a movie to the watch list.");
        } else {
            setMovies([...movies, { id: uuidv4(), title: newMovieTitle, watched: false }]);
        };
    };

    const removeMovie = id => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
    };

    const toggleWatched = id => {
        const updatedMovies = movies.map(movie => (
            movie.id === id ? { ...movie, watched: !movie.watched } : movie
        ));
        setMovies(updatedMovies);
    };

    const editMovie = (id, newTitle) => {
        const updatedMovies = movies.map(movie => (
            movie.id === id ? { ...movie, title: newTitle } : movie
        ));
        setMovies(updatedMovies);
    };


    return (
        <div className="WatchListApp">
            <AppBar />
            <Container maxWidth="xl" sx={{ mb: "2rem" }}>
                <Grid item xs={12} md={12} lg={8} sx={{ mt: "2rem" }}>
                    <WatchList
                        movies={movies}
                    />
                </Grid>
            </Container>
        </div>
    );
};
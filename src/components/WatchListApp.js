import React, { useState, useEffect } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';
import AppBar from './AppBar';
import WatchList from './movies-to-watch/WatchList';
import WatchListForm from './movies-to-watch/WatchListForm';
import FavoritesList from './favorites/FavoritesList';
import DislikedList from './disliked/DislikedList';
import { Container, Grid } from '@mui/material';

export default function WatchListApp() {
    const [movies, setMovies] = useLocalStorageState("movies", []);

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


    // FAVORITE MOVIES

    const [favorites, setFavorites] = useLocalStorageState("favorites", []);

    const addFavorite = (id, title) => {
        setFavorites([...favorites, { id, title }]);
        removeMovie(id);
    };

    const editFavorite = (id, newTitle) => {
        const updatedFavs = favorites.map(fav => (
            fav.id === id ? { ...fav, title: newTitle } : fav
        ));
        setFavorites(updatedFavs);
    };

    const removeFavorite = (id) => {
        const updatedFavs = favorites.filter(fav => fav.id !== id);
        setFavorites(updatedFavs);
    };


    // DISLIKED MOVIES

    const [disliked, setDisliked] = useLocalStorageState("disliked", []);

    const addDisliked = (id, title) => {
        setDisliked([...disliked, { id: id, title: title }]);
        removeMovie(id);
    };

    const editDisliked = (id, newTitle) => {
        const updatedDisliked = disliked.map(badMovie => (
            badMovie.id === id ? { ...badMovie, title: newTitle } : badMovie
        ));
        setDisliked(updatedDisliked);
    };

    const removeDisliked = (id) => {
        const updatedDisliked = disliked.filter(badMovie => badMovie.id !== id);
        setDisliked(updatedDisliked);
    };


    return (
        <div className="WatchListApp">
            <AppBar />
            <Container maxWidth="xl" sx={{ mb: "2rem" }}>
                <Grid container spacing={7}>
                    <Grid item xs={12} md={12} lg={8} sx={{ mt: "2rem" }}>
                        <WatchList
                            movies={movies}
                            addFavorite={addFavorite}
                            addDisliked={addDisliked}
                            toggleWatched={toggleWatched}
                            editMovie={editMovie}
                            removeMovie={removeMovie}
                        />
                        <WatchListForm addMovie={addMovie} />
                    </Grid>
                    <Grid item md={12} lg={4} container>
                        <Grid item container spacing={7} direction="column">
                            <Grid item lg={4} sx={{ mt: "2rem" }}>
                                <FavoritesList
                                    favorites={favorites}
                                    editFavorite={editFavorite}
                                    removeFavorite={removeFavorite}
                                />
                            </Grid>
                            <Grid item lg={4}>
                                <DislikedList
                                    dislikedMovies={disliked}
                                    editDisliked={editDisliked}
                                    removeDisliked={removeDisliked}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
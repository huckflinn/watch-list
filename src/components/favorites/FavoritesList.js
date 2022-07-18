import React from 'react';
import FavoriteMovie from './FavoriteMovie';
import { Paper, Typography, List, Divider } from '@mui/material';

export default function FavoritesList({ favorites, removeFavorite, editFavorite }) {
    return (
        <Paper>
            <Typography sx={{
                fontSize: "1.5rem",
                color: "white",
                padding: "1rem",
                backgroundColor: "#5cb85c",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px"
            }}>
                Precious Gems
            </Typography>
            <Divider />
            <List sx={{ padding: 0 }} style={{ height: 235, overflow: "scroll" }}>
                {favorites.map(fav => (
                    <>
                        <FavoriteMovie
                            key={fav.id}
                            id={fav.id}
                            title={fav.title}
                            editFavorite={editFavorite}
                            removeFavorite={removeFavorite}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper >
    );
};
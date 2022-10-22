import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {getAlbums, getUsers} from "../../redux/Actions/albumsActions";
import {useDispatch, useSelector} from "react-redux";
import "./style.css";
import ListView from "./ListView";
import Paginator from "./Paginator";

const AlbumsList = () => {

    const dispatch = useDispatch();

    const albums = useSelector((state) => state.albumsReducer.albums);
    const loading = useSelector((state) => state.albumsReducer.loading);
    const page = useSelector((state) => state.albumsReducer.page);
    const limit = useSelector((state) => state.albumsReducer.limit);


    useEffect(() => {
        if (albums[limit][page].length === 0) {
            dispatch(getUsers());
            dispatch(getAlbums());
        }
    }, [albums, dispatch, limit, page]);

    return(
        <>
            <hr />
            <Grid container margin={1} spacing={2} rowSpacing={1} display="flex" justifyContent="center" alignItems="center">
                <ListView
                    list={albums[limit] && albums[limit][page]}
                    loading={loading}
                    isAlbum
                />
            </Grid>
            <hr />
            <Grid container className="paginator-container" display="flex" justifyContent="center" alignItems="center">
                <Paginator
                    limit={limit}
                    pageCount={Object.keys(albums[limit]).length + 1}
                    isAlbums />
            </Grid>
            <hr />
        </>

    )
}
export default AlbumsList;


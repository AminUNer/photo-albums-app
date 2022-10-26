import React, {useEffect} from 'react';
import {Grid, Typography} from "@mui/material"
import ListView from "../ListView";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {getAlbumPhotos} from "../../../redux/Actions/photosActions";
import Paginator from "../Paginator";

const Album = () => {

    const dispatch = useDispatch();

    let {albumId} = useParams();
    const [searchParams] = useSearchParams();

    const photos = useSelector((state) => state.photosReducer.photos);
    const loading = useSelector((state) => state.photosReducer.loading);
    const page = useSelector((state) => state.photosReducer.page);
    const limit = useSelector((state) => state.photosReducer.limit);


    useEffect(() => {
        if (photos[limit][page].length === 0) {
            dispatch(getAlbumPhotos(page, limit, albumId));
        }
    }, [photos, dispatch, limit, page, albumId]);

    return(
        <>
            <Grid container margin={1} spacing={2} rowSpacing={1} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom>
                    Album: '{searchParams.get('title')}' for user {searchParams.get('owner')}
                </Typography>
            </Grid>
            <Grid container margin={1} spacing={2} rowSpacing={1} display="flex" justifyContent="center" alignItems="center">
                <ListView
                    list={photos[limit] && photos[limit][page]}
                    loading={loading}
                />
                <Grid container className="paginator-container" display="flex" justifyContent="center" alignItems="center">
                    <Paginator
                        limit={limit}
                        pageCount={Object.keys(photos[limit]).length + 1}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default Album;


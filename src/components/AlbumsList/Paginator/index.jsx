import React from 'react';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import {useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";
import "./style.css";
import {getAlbums} from "../../../redux/Actions/albumsActions";
import {getAlbumPhotos} from "../../../redux/Actions/photosActions";

const Paginator = ({limit, isAlbums, pageCount, albumId}) => {

    const dispatch = useDispatch();

    return(
        <>
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={(pageEvent) =>  isAlbums ? dispatch(getAlbums( pageEvent.selected + 1, limit)) :
                    dispatch(getAlbumPhotos( pageEvent.selected + 1, limit, albumId))}
                containerClassName={'container'}
                previousLinkClassName={'page'}
                breakClassName={'page'}
                nextLinkClassName={'page'}
                pageClassName={'page'}
                disabledClassNae={'disabled'}
                activeClassName={'active'}
            />

            <FormControl sx={{ width: 120 }}>
                <InputLabel id="select-small">Size</InputLabel>
                <NativeSelect
                    labelId="select-small"
                    id="select-small"
                    defaultValue={limit}
                    onChange={(e) => isAlbums ? dispatch(getAlbums( 1, e.target.value)) :  dispatch(getAlbumPhotos(1, limit, albumId))}
                >
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                </NativeSelect>
            </FormControl>
        </>
    )
}
export default Paginator;


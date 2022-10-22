import React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import './style.css';
import {RESET_PHOTOS} from "../../../constants/ActionTypes";
import {Box, LinearProgress} from "@mui/material";

const ListView = ({list, isAlbum, loading}) => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.albumsReducer.users);
    const albums = useSelector((state) => state.albumsReducer.albumsArray);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState({});
    const [album, setAlbum] = React.useState({});

    const handleClickOpen = (image) => {
        setAlbum(albums.find((element) => element.id === image.albumId));
        setImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            {
                loading ? (
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                ) : (
                    <>
                        {list.map((item) => (
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                {
                                    isAlbum ? (
                                        <Link to={`/albums/${item.id}?owner=${users[item.userId]?.username}&title=${item.title}`}>
                                            {
                                                <div
                                                    className="album-cover"
                                                    style={{
                                                        backgroundImage: `url(https://via.placeholder.com/150/${Math.floor(Math.random() * 16777215).toString(16)})`,
                                                    }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: RESET_PHOTOS,
                                                        })}
                                                >
                                                    <h4>{users[item.userId]?.username}</h4>
                                                    <hr />
                                                    <p>{item.title}</p>
                                                </div>
                                            }
                                        </Link>
                                    ) : (
                                        <div
                                            className="album-cover photo-cover"
                                            onClick={() => handleClickOpen(item)}
                                            style={{
                                                backgroundImage: `url(${item?.thumbnailUrl})`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                textAlign: "center",
                                            }}
                                        >
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                }
                            </Grid>
                        ))}
                    </>
                )
            }
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="dialog-title"
            >
                <DialogTitle id="dialog-title">
                    <b>{users[album.userId]?.username}: </b>{image?.title}
                    <br />
                     <b>Album:</b> {album?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <img src={image.url} alt="fullsize preveiw" />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    )
}
export default ListView;


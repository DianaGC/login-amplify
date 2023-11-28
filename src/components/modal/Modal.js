import React from "react";
import { Box, Modal, Typography, Card, CardMedia, CardActionArea, CardContent, Grid } from '@mui/material';
import "./Modal.css"

const ModalDialog = (props) => {
    const { digimon, image } = props

    return (
        <Box >
            <Modal
                open={props.openModalDialog}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="container2" >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography id="modal-modal-title" variant="h6" component="h5" align="center">
                                    {digimon.id}
                                </Typography>
                                <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                                    {digimon.name}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    width="100%"
                                    image={image}
                                    alt="green iguana"
                                />
                                <Grid container>
                                    <Grid item xs={12} md={4}>

                                        <Typography id="modal-modal-title" variant="h6" component="h5" align="center">
                                            Level
                                        </Typography>
                                       
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography id="modal-modal-title" variant="h6" component="h5" align="center">
                                            Atribute
                                        </Typography>
                                       
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Typography id="modal-modal-title" variant="h6" component="h5" align="center">
                                            Type
                                        </Typography>
                                       
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Modal>
        </Box>
    );
};

export default ModalDialog;
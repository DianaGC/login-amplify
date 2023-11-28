import React from 'react';
import "./Card.css"
import { Card, Typography, CardMedia, CardActionArea, CardContent, Grid } from '@mui/material';

const CardDigimon = (props) => {
    return (
        <div item  key={props.id} className='image' style={{height: "100%"}}  >
            <Card className="container">
                <CardActionArea >
                    <CardMedia
                        component="img"
                        
                        image={props.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='name'>
                            {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    )
}

export default CardDigimon
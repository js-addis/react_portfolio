import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Typography, CardMedia, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: '200px',
        minWidth: '200px',
        height: '200px',
        margin: 'auto',
        border: 'none',
        boxShadow: 'none'
    },
    media: {
        height: '150px',
    },
    typography: {
        color: "#989898"
    }
})

export default function ArsenalObject(props) {
    const classes = useStyles();
    return(
        <Tooltip title={props.tooltip}>
            <Card className={classes.root}>  
            <CardMedia
                className={classes.media}
                image={props.image}
            >
            </CardMedia>
            <CardContent>
                <Typography className={classes.typography} gutterBottom variant="h6" component="h3">
                    { props.title }
                </Typography>
            </CardContent>
        </Card>
        </Tooltip>
        
    )
    
}
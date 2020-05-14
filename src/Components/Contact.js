import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 200, 
        paddingBottom: 200,
        textAlign: 'center',
        color: '#f29898'
    }
}))

export default function Contact() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h1>PHONE: 412-699-8349</h1>
            <h1>EMAIL: jacobaddis23@gmail.com</h1>
        </div>
    )
}
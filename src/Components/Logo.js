import React from 'react';
import { makeStyles } from '@material-ui/core'
import '../Logo.css';

const useStyles = makeStyles((theme) => ({
    root: {
        alignContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },

}))

export default function Logo() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <img className="Logo" src={'pics/mylogo2.png'}></img>
        </div>
    )
}
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: 0,
            paddingRight: 0
        },
        backgroundColor: 'white',
        height: 600,
        width: '100%',
        margin: 0,
        
        left: 0,
        flexGrow: 1,
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            width: '90px',
            height: '70px'
        },
        width: '180px',
        height: '150px',
        verticalAlign: 'center',
        alignSelf: 'center',
    },
    item: {
        textAlign: 'center',
        height: 180,
    },
    divider: {
        marginTop: 50,
        marginBottom: 50
    }
}));
export default function Footer() {

    const classes = useStyles();
    
    return(
    <div className={ classes.root }>
        <Grid container 
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item  xs={4} sm={4} md={4} className={classes.item}>
                <img src="pics/1.png" className={classes.logo}></img>
            </Grid>
            <Grid item  xs={4} sm={4} md={4} className={classes.item}>
                <img src="pics/2.png" className={classes.logo}></img>
            </Grid>
            <Grid item  xs={4} sm={4} md={4} className={classes.item}>
                <img src="pics/3.png" className={classes.logo}></img>
            </Grid>
            <Grid item  xs={4} sm={4} md={4} className={classes.item}>
                <img src="pics/4.png" className={classes.logo}></img>
            </Grid>
            <Grid item  xs={4} sm={4} md={4} className={classes.item}>
                <img src="pics/5.png" className={classes.logo}></img>
            </Grid>
        </Grid>
    </div>
    )
}
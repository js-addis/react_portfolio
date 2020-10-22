import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import ArsenalObject from './ArsenalObject';

const useStyles = makeStyles({
    root: {
        cursor: 'pointer'
    },
})

export default function ArsenalGrid(props) {
    const classes = useStyles();
    return(
        <Grid className={classes.root} container direction="row" justify="space-evenly" alignItems="center" spacing={5}>
            <Grid item><ArsenalObject image={'pics/graphics_card.jpg'} title="GTX 1070" tooltip={"Nvidea GeForce GTX 1070 8GB Graphics Card"}></ArsenalObject></Grid>
            <Grid item><ArsenalObject image={'pics/intel_i5.jpg'} title="Intel i5" tooltip={"Intel Core i5-4570 CPU @ 3.20GHz, 3201 Mhz, 4 Cores, 4 Logical Processors"}></ArsenalObject></Grid>
            <Grid item><ArsenalObject image={'pics/samsung.jpg'} title="Samsung SSD" tooltip={"Samsung 500GB Solid State Drive"}></ArsenalObject></Grid>
        </Grid>
    )
    
}
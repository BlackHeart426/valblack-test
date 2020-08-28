import {styleCardResult} from "./styleCardResult";
import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from "@material-ui/core/Grid";
import {green} from "@material-ui/core/colors";
import {Paper, Typography} from "@material-ui/core";

export const CardResult = (props: any) => {
    const classes = styleCardResult()
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.card}>
                <Grid container >
                    <Grid item xs={6}>
                        <Typography align={"left"} >
                           JavaScript основы
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography align={"center"}  >
                            6 из 16
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography align={"center"}  color="textSecondary">
                            14:51 19 August 2020
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: "right"}}>
                        <CheckCircleOutlineIcon style={{ color: green[500] }}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

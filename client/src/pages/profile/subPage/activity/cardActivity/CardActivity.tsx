import {styleCardActivity} from "./styleCardActivity";
import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from "@material-ui/core/Grid";
import {green} from "@material-ui/core/colors";
import {Paper, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const CardActivity = (props: any) => {
    const classes = styleCardActivity()
    const history = useHistory()
    const {
        testResults
    } = props
    const openResultTest = (uuid: string) => {
        history.push(`/rt/${uuid}`)
    }
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.card}>
                <Grid container >
                    <Grid item xs={1} style={{textAlign: "center"}}>
                        <CheckCircleOutlineIcon style={{ color: green[500] }}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography align={"left"} >
                            Не прошел тест JavaScript основы
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography align={"right"}  color="textSecondary">
                            14:51 19 August 2020
                        </Typography>
                    </Grid>
                </Grid>
                <div>
                    <Typography align={"left"} >
                        прохождение #y0n73w с результатом: 6 из 15 правильных ответов и 24 очков рейтинга
                    </Typography>
                </div>
            </Paper>
        </div>
    )
}

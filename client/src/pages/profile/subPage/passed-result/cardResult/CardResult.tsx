import {styleCardResult} from "./styleCardResult";
import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from "@material-ui/core/Grid";
import {green, red} from "@material-ui/core/colors";
import {Paper, Typography} from "@material-ui/core";
import {IListTestsResult} from "../../../../../store/reducers/testResultShortInfoReducer";
import moment from "moment";



export const CardResult = (props: any) => {
    const {
        testResults
    } = props
    const classes = styleCardResult()
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.card}>
                <Grid container >
                    <Grid item xs={6}>
                        <Typography align={"left"} >
                            {testResults.testId.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography align={"center"}  >
                            {testResults.rightAnswer} из {testResults.summaryAnswer}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography align={"center"}  color="textSecondary">
                            {moment(testResults.datePassed).format('HH:mm LL')}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: "right"}}>
                        <CheckCircleOutlineIcon style = {testResults.testPassed ? { color: green[500] } : { color: red[500] } }/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

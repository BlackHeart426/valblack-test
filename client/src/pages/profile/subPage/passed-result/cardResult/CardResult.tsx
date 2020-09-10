import {styleCardResult} from "./styleCardResult";
import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from "@material-ui/core/Grid";
import {green, red} from "@material-ui/core/colors";
import { useHistory} from 'react-router-dom';
import {Paper, Typography} from "@material-ui/core";
import {IListTestsResult} from "../../../../../store/reducers/testResultShortInfoReducer";
import moment from "moment";



export const CardResult = (props: any) => {
    const history = useHistory()
    const {
        testResults
    } = props
    const classes = styleCardResult()

    const openResultTest = (uuid: string) => {
        history.push(`/rt/${uuid}`)
    }

    return (
        <div className={classes.root} onClick={() => openResultTest(testResults.uuid)}>
            <Paper elevation={3} className={classes.card}>
                <Grid container >
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                        <Typography align={"left"} >
                            {testResults.testId.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={2} xl={2}>
                        <Typography align={"center"}  className={classes.rightAnswer}>
                            {testResults.rightAnswer} из {testResults.summaryAnswer}
                        </Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={6} lg={3} xl={3}>
                        <Typography align={"left"}  color="textSecondary">
                            {moment(testResults.datePassed).format('HH:mm LL')}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={6} lg={1} xl={1} style={{textAlign: "center"}}>
                        <CheckCircleOutlineIcon style = {testResults.testPassed ? { color: green[500] } : { color: red[500] } }/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

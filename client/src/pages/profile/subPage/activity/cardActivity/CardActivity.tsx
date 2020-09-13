import {styleCardActivity} from "./styleCardActivity";
import React from "react";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Grid from "@material-ui/core/Grid";
import {green, red} from "@material-ui/core/colors";
import {Paper, Typography} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import moment from "moment";

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
                        <CheckCircleOutlineIcon style = {testResults.testPassed ? { color: green[500] } : { color: red[500] } }/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography align={"left"} >
                            Не прошел тест  <strong>{testResults.testId.name}</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography align={"right"}  color="textSecondary">
                            {moment(testResults.datePassed).format('HH:mm LL')}
                        </Typography>
                    </Grid>
                </Grid>
                <div>
                    <Typography align={"left"} >
                        прохождение <Link to={`/rt/${testResults.uuid}`}>#{testResults.uuid.substring(0, 5)}</Link> с результатом:  {testResults.rightAnswer} из {testResults.summaryAnswer} правильных ответов
                    </Typography>
                </div>
            </Paper>
        </div>
    )
}

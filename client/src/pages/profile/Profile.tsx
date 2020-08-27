import React, {useEffect, useState} from "react";
import {useStyleProfile} from "./styleProfile";
import {Button, Grid, Typography} from "@material-ui/core";
import {useHistory, useParams, useLocation} from "react-router-dom";
import {Settings} from "./sunPage/Settings";
import {Result} from "./sunPage/Result";
import {Activity} from "./sunPage/Activity";

type subPage = 'passed-tests' | 'settings' | 'activity'

export const Profile = (props: any) => {
    const history = useHistory()
    const location = useLocation();
    const classes = useStyleProfile()
    const [subPage, setSubPage] = useState('activity')

    useEffect(() => {
        const subPageUrl = location.pathname.split('/')[2]
        subPageUrl && setSubPage(subPageUrl)
    },[location])

    const handleOpenSettings = (event: any) => {
        history.push("/profile/settings")
    }

    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.leftSide}>
                        <div className={classes.avatarContainer}>
                            <img className={classes.avatar} src={"https://cdn.proghub.ru/avatars/default.png"}/>
                        </div>
                        <div className={classes.userName}>
                            <Typography align={"left"} variant="h5">
                                <strong>BlackHeart</strong>
                            </Typography>
                            <Typography align={"left"} variant="h6">
                                @blackheart
                            </Typography>
                        </div>
                        <div className={classes.actionSettings}>
                            <Button
                                color={"primary"}
                                fullWidth={true}
                                variant={"outlined"}
                                onClick={handleOpenSettings}
                            >
                                Настройки
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.rightSide}>
                        {subPage === 'settings' && <Settings/>}
                        {subPage === 'passed-tests' && <Result/>}
                        {subPage === 'activity' && <Activity/>}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

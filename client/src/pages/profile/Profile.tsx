import React, {useEffect, useState} from "react";
import {useStyleProfile} from "./styleProfile";
import {Button, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import {useHistory, useParams, useLocation} from "react-router-dom";
import {Settings} from "./sunPage/setttings/Settings";
import {PassedResult} from "./sunPage/passed-result/PassedResult";
import {Activity} from "./sunPage/activity/Activity";

const listSubPage = ['',  'passed-tests',  'settings']

export const Profile = (props: any) => {
    const history = useHistory()
    const location = useLocation();
    const classes = useStyleProfile()
    const [subPage, setSubPage] = useState('activity')
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const subPageUrl = location.pathname.split('/')[2]
        subPageUrl && setSubPage(subPageUrl)
    },[location])

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        history.push("/profile/"+ listSubPage[newValue])
    };


    const handleOpenSettings = (event: any) => {
        history.push("/profile/settings")
    }

    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.leftSide}>
                        <div className={classes.avatarContainer}>
                            <img className={classes.avatar} src={"https://cdn.proghub.ru/avatars/e6db24892cfa78a79509e8d00a65dd92.png"}/>
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
                        <div className={classes.tabs}>
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                                aria-label="disabled tabs example"
                            >
                                <Tab label="Активность" />
                                <Tab label="Результаты тестов" />
                            </Tabs>
                        </div>

                        {subPage === 'settings' && <Settings/>}
                        {subPage === 'passed-tests' && <PassedResult/>}
                        {subPage === 'activity' && <Activity/>}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

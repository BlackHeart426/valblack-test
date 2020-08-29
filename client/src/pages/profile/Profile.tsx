import React, {useEffect, useState} from "react";
import {useStyleProfile} from "./styleProfile";
import {Button, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import {useHistory, useParams, useLocation} from "react-router-dom";
import Settings from "./subPage/setttings/Settings";
import {PassedResult} from "./subPage/passed-result/PassedResult";
import {Activity} from "./subPage/activity/Activity";
import ProfileInfo from "./ProfileInfo";



export const Profile = (props: any) => {

    const classes = useStyleProfile()
    const [subPage, setSubPage] = useState(0)


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setSubPage( newValue )
    };


    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <div className={classes.leftSide}>
                      <ProfileInfo classes={classes} openSettings={() => setSubPage( 2 )}/>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.rightSide}>
                        <div className={classes.tabs}>
                            <Tabs
                                value={subPage}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                                aria-label="disabled tabs example"
                            >
                                <Tab label="Активность" />
                                <Tab label="Результаты тестов" />
                                <Tab label="Настройки пользователя" />
                            </Tabs>
                        </div>

                        {subPage === 2 && <Settings/>}
                        {subPage === 1 && <PassedResult/>}
                        {subPage === 0 && <Activity/>}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

import React, {useEffect, useState} from "react";
import {useStyleProfile} from "./styleProfile";
import {Button, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import {useHistory, useParams, useLocation} from "react-router-dom";
import Settings from "./subPage/setttings/Settings";
import {PassedResult} from "./subPage/passed-result/PassedResult";
import {Activity} from "./subPage/activity/Activity";
import ProfileInfo from "./ProfileInfo";
import {getResultTestActionCreator} from "../../store/action/testResult/getTestResultAction";
import {connect} from "react-redux";
import {getResultTestShortInfoByUserActionCreator} from "../../store/action/testShortInfo/getTestResultShortInfoAction";



const Profile = (props: any) => {

    const classes = useStyleProfile()
    const [subPage, setSubPage] = useState(0)

    useEffect(() => {
        props.action.getResultTestShortInfo(props.userId)
    },[])

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setSubPage( newValue )
    };


    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                        <div className={classes.leftSide}>
                            <ProfileInfo classes={classes} openSettings={() => setSubPage( 2 )}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                        <div className={classes.rightSide}>
                            <div className={classes.tabs}>
                                <Tabs
                                    value={subPage}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="on"
                                    onChange={handleChange}
                                    aria-label="disabled tabs example"
                                >
                                    <Tab label="Активность" />
                                    <Tab label="Результаты тестов" />
                                    <Tab label="Настройки пользователя" />
                                </Tabs>
                            </div>

                            {subPage === 2 && <Settings/>}
                            {subPage === 1 && <PassedResult arrTestResultShortInfo = {props.arrTestResultShortInfo}/>}
                            {subPage === 0 && <Activity arrTestResultShortInfo = {props.arrTestResultShortInfo}/>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        userId: state.currentUser.data.uuid,
        arrTestResultShortInfo: state.testResultShortInfo.data
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getResultTestShortInfo: (userId: string) => dispatch(getResultTestShortInfoByUserActionCreator(userId)),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

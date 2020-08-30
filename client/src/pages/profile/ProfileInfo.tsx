import {Button, Typography} from "@material-ui/core";
import React, {useEffect, memo} from "react";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/rootReducer";

const ProfileInfo = (props: any) => {
    const avatarUrl = useSelector((state: RootState) => state.currentUser.data.avatarUrl)
    const {classes, openSettings} = props;

    useEffect(() => {
        console.log('ProfileInfo')
    },[])

    return (
        <>
            <div className={classes.avatarContainer}>
                <img className={classes.avatar} src={avatarUrl ? avatarUrl : ''}/>
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
                    onClick={openSettings}
                >
                    Настройки
                </Button>
            </div>
        </>
    )
}

export default memo(ProfileInfo)

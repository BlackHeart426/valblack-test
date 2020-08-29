import {Button, Typography} from "@material-ui/core";
import React, {useEffect, memo} from "react";
import {useHistory} from "react-router-dom";

const ProfileInfo = (props: any) => {
    const {classes, openSettings} = props;

    useEffect(() => {
        console.log('ProfileInfo')
    },[])

    return (
        <>
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
                    onClick={openSettings}
                >
                    Настройки
                </Button>
            </div>
        </>
    )
}

export default memo(ProfileInfo)

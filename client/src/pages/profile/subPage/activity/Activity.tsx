import React from "react";
import {Typography} from "@material-ui/core";
import {CardActivity} from "./cardActivity/CardActivity";

export const Activity = (props: any) => {

    return (
        <div style={{paddingTop: 10}}>
            <Typography align={"left"} variant="h6">
                <strong>Последняя активность</strong>
            </Typography>
            <CardActivity />
        </div>
    )
}

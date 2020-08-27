import React from "react";
import {useStyles} from "./styles";
import {Typography} from "@material-ui/core";

export const Footer = () => {
    return (
        <div>
            <Typography align={"center"}>
                <strong>support@valblack.ru</strong>
            </Typography>
            <Typography align={"center"}  color="textSecondary">
                Copyright © valBlack 2020.
            </Typography>
        </div>
    )
}

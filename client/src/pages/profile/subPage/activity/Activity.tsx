import React from "react";
import {Typography} from "@material-ui/core";
import {CardActivity} from "./cardActivity/CardActivity";
import {CardResult} from "../passed-result/cardResult/CardResult";

export const Activity = (props: any) => {
    const {arrTestResultShortInfo} = props
    return (
        <div style={{paddingTop: 10}}>
            <Typography align={"left"} variant="h6">
                <strong>Последняя активность</strong>
            </Typography>
            <div style={{paddingTop: 10}}>
                { arrTestResultShortInfo && arrTestResultShortInfo.sort(
                    (a: any, b: any) => (a.datePassed > b.datePassed) ? -1 : 1
                ).map((testResults: any) =>
                    <CardActivity key={testResults.uuid} testResults={testResults}/>)}
            </div>
        </div>
    )
}

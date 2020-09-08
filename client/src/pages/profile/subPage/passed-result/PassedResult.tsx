import React from "react";
import {CardResult} from "./cardResult/CardResult";

export const PassedResult = (props: any) => {
    const {arrTestResultShortInfo} = props
    return (
        <div style={{paddingTop: 10}}>
            { arrTestResultShortInfo.sort(
                (a: any, b: any) => (a.datePassed > b.datePassed) ? -1 : 1
            ).map((testResults: any) =>
                <CardResult key={testResults.uuid} testResults={testResults}/>)}
        </div>
    )
}

import React from "react";
import {useStyleHome} from "./styleProfile";
import {Hidden, Typography} from "@material-ui/core";

export const HomePage = () => {
    const classes = useStyleHome()
    return(
        <div  className={classes.root}>
            <div className={classes.container}>
                <div className={classes.welcome}>
                    <Typography align={"left"} variant="h4">
                        Изучай программирование решая задачи
                    </Typography>
                    <Typography align={"left"} variant="h6">
                        Основной ресурс для подготовки к техническому интервью и оттачиванию навыков.
                    </Typography>
                    <Typography align={"left"} variant="h6">
                        Все, что вам нужно, на одной платформе.
                    </Typography>
                </div>
                <Hidden  smDown>
                    <div className={classes.exampleQuestion}>
                        <h3>Что выведет код?</h3>
                        <div >
                            <img className={classes.codeContainer} src="https://telegra.ph/file/cddcaefea2f7863206475.jpg" alt=""/>
                        </div>

                    </div>
                </Hidden>

            </div>

        </div>
    )
}

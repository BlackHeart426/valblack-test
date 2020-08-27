import React from "react";
import {useStyleSettings} from "./styleSettings";
import {Button, Grid, TextField, Typography} from "@material-ui/core";

export const Settings = (props: any) => {
    const classes = useStyleSettings()
    return (
        <div className={classes.container}>
            <div className={classes.avatarChange}>
                <div className={classes.titleAvatar}>
                    <Typography align={"left"}  >
                        Аватар
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img  className={classes.avatar}  src={"https://cdn.proghub.ru/avatars/e6db24892cfa78a79509e8d00a65dd92.png"}/>
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <Typography align={"left"} >
                                Загрузить новый:
                            </Typography>
                            <Button
                                color={"secondary"}
                                fullWidth={true}
                                className={classes.uploadAvatar}
                                variant={"outlined"}
                                // onClick={handleOpenSettings}
                            >
                                выберите файл
                            </Button>
                            <Typography align={"left"}  color="textSecondary">
                                Максимальный размер - 512кб, форматы: jpg, png
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.nameChange}>
                <Typography align={"left"}  >
                    Имя
                </Typography>
                <TextField
                    id="standard-full-width"
                    className={classes.nameChangeInput}
                    placeholder="Введите имя"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Typography align={"left"}  color="textSecondary">
                    Минимальная длина - 8 букв и один пробел
                </Typography>
                <Button
                    variant="contained"
                    color={"primary"}
                    className={classes.buttonSave}
                    fullWidth={true}
                    // onClick={handleOpenSettings}
                >
                   Сохранить
                </Button>
            </div>
        </div>
    )
}

import React, {useRef} from "react";
import {useStyleSettings} from "./styleSettings";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {getTestInfoActionCreator} from "../../../../store/action/testInfoAction";
import {getCategoriesActionCreator} from "../../../../store/action/categoriesAction";
import {connect} from "react-redux";
import {uploadAvatarActionCreator} from "../../../../store/action/currentUser/currentUserAvatarAction";

const Settings = (props: any) => {
    const classes = useStyleSettings()
    const inputRef = useRef<HTMLInputElement>(null)

    const click = () => inputRef.current != null && inputRef.current.click()

    function onFileUpload(event: any): void {
        const file = event.target.files[0]
        const image = file
        console.log(image)

        props.action.uploadAvatar(image)
        const reader = new FileReader()

        // reader.onload = () => {
        //     this.imagePreview = reader.result
        // }

        reader.readAsDataURL(file)
    }
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
                            <input
                                type="file"
                                accept=" image/jpeg, image/png"
                                style={{display: 'none'}}
                                onChange={onFileUpload}
                                ref={inputRef}
                            />
                            <Button
                                color={"secondary"}
                                fullWidth={true}
                                className={classes.uploadAvatar}
                                variant={"outlined"}
                                onClick={click}
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


function mapStateToProps(state: any) {
    return {
        // arrTestsInfo: state.testInfo.data,
        // arrCategories: state.categories.data.list
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            uploadAvatar: (image: any) => dispatch(uploadAvatarActionCreator(image)),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

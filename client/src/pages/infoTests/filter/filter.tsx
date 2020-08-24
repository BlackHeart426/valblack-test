import React from "react";
import {Paper, TextField} from "@material-ui/core";
import {styleFilter} from "./styleFilter";
import {Autocomplete} from "@material-ui/lab";

export const Filter = (props: any) => {
    const classes = styleFilter()
    return (
        <>
            <Paper className={classes.paper}>
                <Autocomplete
                    id="combo-box-demo"
                    size={'small'}
                    className={classes.autocomplete}
                    options={categories}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Категория" variant="outlined" />}
                />
            </Paper>
        </>
    )
}

const categories = [
    { title: 'JS', id: '5f43cd439d7c050d20ccc627' },
    { title: 'Node JS', id: '5f43cb51769cf237b4291e10' },
]

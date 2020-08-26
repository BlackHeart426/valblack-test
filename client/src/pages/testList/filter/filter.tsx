import React, {useEffect} from "react";
import {Paper, TextField} from "@material-ui/core";
import {styleFilter} from "./styleFilter";
import {Autocomplete, Skeleton} from "@material-ui/lab";
import {getTestInfoActionCreator} from "../../../store/action/testInfoAction";
import {connect} from "react-redux";
import {getCategoriesActionCreator, setCategoriesActionCreator} from "../../../store/action/categoriesAction";

const Filter = (props: any) => {
    const [value, setValue] = React.useState<string | null>(null);
    const {loading} = props
    useEffect(() => {
        props.action.getCategories()
    },[])
    const classes = styleFilter()

    return ( //lazyLoad
        <>
            {props.arrCategories
                && <Paper className={classes.paper}>
                    {loading
                        ?
                            <Skeleton variant="rect" height='28px'/>
                        :   <Autocomplete
                            id="combo-box-categories"
                            size={'small'}
                            className={classes.autocomplete}
                            options={props.arrCategories}
                            onChange={(event: any, newValue: string | null) => {
                                props.action.setCategory(newValue);
                            }}
                            getOptionLabel={(option: any) => option.name}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Категория" variant="outlined" />}
                        />
                    }
                </Paper>
            }
        </>
    )
}

interface ICategory {
    name: string,
    _id: string
}

const categories = [
    { name: 'JS', id: '5f43cd439d7c050d20ccc627' },
    { name: 'Node JS', id: '5f43cb51769cf237b4291e10' },
]


function mapStateToProps(state: any) {
    return {
        arrCategories: state.categories.data.list,
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getCategories: () => dispatch(getCategoriesActionCreator()),
            setCategory: (category: string | null) => dispatch(setCategoriesActionCreator(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

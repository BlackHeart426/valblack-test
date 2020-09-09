import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {styleTestList} from "./styleTestList";
import {Grid, Hidden, Paper} from "@material-ui/core";
import {TestCard} from "./testCard/TestCard";
import Filter from "./filter/filter";

const TestList = (props: any) => {
    const classes = styleTestList();

    useEffect(() => {
        props.action.getInfoTests()
    },[])

    function filterCategory(item: any) {
        if (!props.selectedCategory) {
            return item
        } else  {
            if (item.category === props.selectedCategory._id) {
                return item
            }
        }
    }

    return(
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Hidden lgUp>
                        <div className={classes.filterTop}>
                            {props.loadingCategories
                                ? <Filter loading={props.loadingCategories}/>
                                : <Filter/>
                            }

                        </div>
                    </Hidden>
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={12} lg={8} xl={8} zeroMinWidth>
                            <div className={classes.content}>
                                <Grid container spacing={3}>
                                    {props.arrTestsInfo &&
                                            props.arrTestsInfo
                                                .filter((item: any) => filterCategory(item))
                                                .map((test: any, index: number) => (
                                                    <Grid item xs={12} sm={6} md={3} lg={4} xl={4}   key={index}>
                                                        <TestCard test={test}/>
                                                    </Grid>
                                            ))
                                    }
                                    {props.loadingTestInfo
                                        && Array(7).join('*').split('').map((item: any, index: number) => {
                                            return  <Grid item xs={4} key={index}>
                                                <TestCard loading={props.loadingTestInfo}/>
                                            </Grid>
                                        })
                                    }
                                </Grid>
                            </div>
                        </Grid>
                        <Hidden mdDown>
                        <Grid item xs={12} md={4} zeroMinWidth>
                            <div className={classes.filters}>
                                {props.loadingCategories
                                ? <Filter loading={props.loadingCategories}/>
                                : <Filter/>
                                }

                            </div>
                        </Grid>
                        </Hidden>
                    </Grid>


                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        arrTestsInfo: state.testInfo.data,
        loadingTestInfo: state.testInfo.meta.netWorkStatus.isFetching,
        loadingCategories: state.categories.meta.netWorkStatus.isFetching,
        selectedCategory: state.categories.data.selected
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getInfoTests: () => dispatch(getTestInfoActionCreator()),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestList)

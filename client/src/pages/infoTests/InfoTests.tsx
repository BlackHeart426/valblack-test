import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {styleInfoTests} from "./styleInfoTests";
import {Grid, Paper} from "@material-ui/core";
import {TestCard} from "./testCard/TestCard";
import {Filter} from "./filter/filter";

const InfoTests = (props: any) => {
    const classes = styleInfoTests();

    useEffect(() => {
        props.action.getInfoTests()
    },[])

    return(
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <div className={classes.content}>
                                <Grid container spacing={3}>
                                    {props.arrTestsInfo
                                        ?
                                            props.arrTestsInfo.map((test: any, index: number) => (
                                                <Grid item xs={4}  key={index}>
                                                    <TestCard test={test}/>
                                                </Grid>
                                            ))
                                        : 'Тестов нет'
                                    }
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={classes.filters}>
                                <Filter/>
                            </div>
                        </Grid>
                    </Grid>


                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        arrTestsInfo: state.testInfo.data,
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getInfoTests: () => dispatch(getTestInfoActionCreator()),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoTests)

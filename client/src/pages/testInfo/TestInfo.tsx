import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {styleTestInfo} from "./styleTestInfo";
import {IListTestsInfo} from "../../store/reducers/testInfoReducer";
import { useLocation, useParams } from "react-router-dom";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";


const TestInfo = (props: any) => {
    const [testInfo, setTestInfo] = useState<IListTestsInfo>({
        category: "", durationOfTime: null, imageSrc: "", name: "", questions: 0, rating: 0
    })
    const classes = styleTestInfo();

    useEffect(() => {
        props.arrTestsInfo
            ? setTestInfo(props.arrTestsInfo.filter((testInfo: IListTestsInfo) => testInfo._id === props.match.params.id)[0])
            : props.action.getInfoTests()
        console.log(props.loadingTestInfo)
    },[props.arrTestsInfo])

    return(
        <div className={classes.root}>
            <div className={classes.backgroundTop}>
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                        <div className={classes.content}>
                            {testInfo._id}
                            {props.loadingTestInfo}
                        </div>
                        <Box  className={classes.boxCardInfo} position="absolute">
                            <div className={classes.paper}>
                                <Card  className={classes.cardInfoContainer}>
                                    <CardActionArea
                                        disabled={!props.arrTestsInfo}
                                    >
                                        {!props.arrTestsInfo ? (
                                            <Skeleton animation="wave" variant="rect" height='140px' />
                                        ) : (
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={testInfo.imageSrc}
                                                title="Contemplative Reptile"
                                            />
                                        )}
                                        <CardContent>
                                            {!props.arrTestsInfo ? (
                                                <>
                                                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                                    <Skeleton animation="wave" height={10} width="80%" />
                                                    <Skeleton animation="wave" height={10} width="80%" />
                                                    <Skeleton animation="wave" height={10} width="80%" />
                                                    <Skeleton animation="wave" height={10} width="80%" />
                                                </>
                                            ) : (
                                                <>

                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                        across all continents except Antarctica
                                                    </Typography>
                                                </>
                                            )}

                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Открыть
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        arrTestsInfo: state.testInfo.data
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getInfoTests: () => dispatch(getTestInfoActionCreator()),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestInfo)

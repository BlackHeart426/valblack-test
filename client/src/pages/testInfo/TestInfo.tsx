import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {styleTestInfo} from "./styleTestInfo";
import {default as UUID} from "node-uuid";
import {IListTestsInfo} from "../../store/reducers/testInfoReducer";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@material-ui/core";
import {Rating, Skeleton} from "@material-ui/lab";
import {getCategoriesActionCreator} from "../../store/action/categoriesAction";
import {useHistory} from "react-router-dom";
import {setCurrentAnswerTestUser, setCurrentUser} from "../../store/action/currentUser/currentUserAction";


const TestInfo = (props: any) => {
    const history = useHistory();
    const [testInfo, setTestInfo] = useState<IListTestsInfo>({
        category: "", durationOfTime: null, imageSrc: "", name: "", questions: 0, rating: 0
    })
    const classes = styleTestInfo();

    useEffect(() => {
        props.action.getCategories()
        props.arrTestsInfo
            ? setTestInfo(prev => props.arrTestsInfo.filter((testInfo: IListTestsInfo) => testInfo._id === props.match.params.id)[0])
            : props.action.getInfoTests()
    },[props.arrTestsInfo])

    const beginningTestHandle = () => {
        const uuid = UUID.v4();
        const data = {
            testId: props.match.params.id,
            userTestID: uuid
        }
        props.action.setAnswersCurrentTest(data)

        history.push("/pt/"+uuid)
    }

    return(
        <div className={classes.root}>
            <div className={classes.backgroundTop}>
                <div className={classes.wrapper}>
                    <div className={classes.container}>
                        <div className={classes.content}>
                            <h1>{testInfo.name}</h1>
                            <div className={classes.rating}>
                                <Rating name="read-only" value={3} readOnly />
                                3.5 (2 оценки)
                            </div>
                        </div>
                        <Box  className={classes.boxCardInfo} position="absolute">
                            <div className={classes.paper}>
                                <Card  className={classes.cardInfoContainer}>
                                    {!props.arrTestsInfo ? (
                                        <Skeleton animation="wave" variant="rect" height='200px' />
                                    ) : (
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200"
                                            image={testInfo.imageSrc}
                                            title="Contemplative Reptile"
                                        />
                                    )}
                                    <CardContent className={classes.cardContent}>
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
                                            <Grid container spacing={3}>
                                                <Grid item xs={7}>
                                                    <Typography variant="h6" color="textSecondary" component="h2">
                                                        Категория
                                                    </Typography>
                                                    <Typography variant="h6" color="textSecondary" component="h2">
                                                        Вопросов
                                                    </Typography>
                                                    <Typography variant="h6" color="textSecondary" component="h2">
                                                        Длительность
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <Typography variant="h6" align={"center"} color="textSecondary" component="p">
                                                        {testInfo.category
                                                            && props.arrCategories.filter((category: any) =>
                                                            category._id === testInfo.category)[0].name}
                                                    </Typography>
                                                    <Typography variant="h6" align={"center"} color="textSecondary" component="p">
                                                        {testInfo.questions}
                                                    </Typography>
                                                    <Typography variant="h6" align={"center"} color="textSecondary" component="p">
                                                        {testInfo.durationOfTime}
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                            </>
                                        )}

                                    </CardContent>
                                    <CardActions className={classes.cardInfoAction}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth={true}
                                            onClick={beginningTestHandle}
                                        >
                                            Пройти
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
            <div>
                Lorem ipsumipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cum dolores error hic illum incidunt molestiae nulla perferendis, similique!
                Lorem ipsumipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cum dolores error hic illum incidunt molestiae nulla perferendis, similique!
                Lorem ipsumipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cum dolores error hic illum incidunt molestiae nulla perferendis, similique!
                Lorem ipsumipsumipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cum dolores error hic illum incidunt molestiae nulla perferendis, similique!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cum dolores error hic illum incidunt molestiae nulla perferendis, similique!
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        arrTestsInfo: state.testInfo.data,
        arrCategories: state.categories.data.list
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getInfoTests: () => dispatch(getTestInfoActionCreator()),
            getCategories: () => dispatch(getCategoriesActionCreator()),
            setAnswersCurrentTest: (data: { answersCurrentTest: any }) => dispatch(setCurrentAnswerTestUser(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestInfo)

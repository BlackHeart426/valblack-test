import React, {useEffect, useRef, useState} from "react";
import AssignmentIcon from '@material-ui/icons/Assignment';
import {connect} from "react-redux";
import {useStyleResultTest} from "./styleResultTest";
import {Grid, Paper, Typography} from "@material-ui/core";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {getResultTestActionCreator} from "../../store/action/testResult/getTestResultAction";
import {IListTestsResult} from "../../store/reducers/testResultReducer";


const ResultTest = (props: any) => {
    const classes = useStyleResultTest()
    const [resultTest, setResultTest] = useState<IListTestsResult>({
        _id: null,
        rightAnswer: null,
        summaryAnswer: null,
        testPassed: false,
        userId: null,
        testId: {
            _id: null,
            name: null
        },
        templateWithAnswer: null
    })
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log('download')
        //Проверка результата в сторе если нет то запрос можно все через Action
        props.action.getResultTest(props.match.params.id);
        //Получить результат и отобразить

    },[])

    useEffect(() => {

        if (props.testResult[props.match.params.id]) {
            console.log('props.testResult.length', props.testResult)
            const data = props.testResult[props.match.params.id].data
            if (data) {
                console.log('data', data)
                setResultTest( (prevState: IListTestsResult) => Object.assign({}, prevState, {...data}))
            }

        }


    }, [props.testResult])
    return (
        <div className={classes.resultTestContainer}>
            <div className={classes.resultTestHeader}>
                РЕЗУЛЬТАТ ТЕСТА "{resultTest.testId.name}"
                {resultTest.rightAnswer}
            </div>
            <div className={classes.resultTestBannerResultSuccess}>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={classes.resultTestBannerResultIcon}>
                            <AssignmentIcon style={{color: '#fff', height: 100, width: '14em'}} />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.resultTestBannerResultMeta}>
                            <div className={classes.resultTestBannerResultTitle}>
                                Тест пройден!
                            </div>
                            <div className={classes.resultTestBannerResultSubTitle}>
                                blackheart прошел тест с результатом 9 из 10
                            </div>
                        </div>
                    </Grid>
                </Grid>


            </div>
            <div className={classes.resultTestResult}>
                <div className={classes.resultTestResultTitle}>
                    РЕЗУЛЬТАТЫ
                </div>
                <div className={classes.resultTestResultItems}>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className={classes.resultTestResultItem}>
                                90%
                            </div>
                            <div style={{color: '#848688'}}>
                                9 из 10 верных ответов
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.resultTestResultItem}>
                                junior
                            </div>
                            <div style={{color: '#848688'}}>
                                сложность
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className={classes.resultTestBody}>
                <div className={classes.wrapperQuestions}>
                    <div className={classes.wrapperQuestionsTitle}>
                        ОТВЕТЫ
                    </div>
                    <div className={classes.resultTestResultQuestionItem}>
                        <div className={classes.resultTestResultQuestionTitle}>
                            <Typography align={"left"} variant="h5">
                                <strong>#1 Какой из следующих методов удаляет последний элемент из массива и возвращает его?</strong>
                            </Typography>
                        </div>
                        <div className={classes.resultTestResultQuestionAnswerList}>
                            <div className={classes.resultTestResultQuestionAnswerItem}>
                                    pop()

                            </div>
                            <div className={classes.resultTestResultQuestionAnswerItem}>
                                    last()
                            </div>
                            <div className={classes.resultTestResultQuestionAnswerItem}>
                                    last()
                            </div>
                            <div className={classes.resultTestResultQuestionAnswerItem}>
                                    last()
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        testResult: state.testResult.data
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getResultTest: (uuidTest: string) => dispatch(getResultTestActionCreator(uuidTest)),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultTest)

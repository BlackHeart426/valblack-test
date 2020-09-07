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
    const [templateWithAnswer, setTemplateWithAnswer] = useState<any | null>(null)
    const [resultTest, setResultTest] = useState<IListTestsResult>({
        _id: null,
        rightAnswer: 1,
        summaryAnswer: 1,
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
                console.log('data1', data)
                console.log('data2', data)
                console.log('templateWithAnswer', data.templateWithAnswer)
                setTemplateWithAnswer(JSON.parse(data.templateWithAnswer))
                setResultTest( (prevState: IListTestsResult) => Object.assign({}, prevState, {...data})) //***
            }

        }


    }, [props.testResult])
    return (
        <div className={classes.resultTestContainer}>
            <div className={classes.resultTestHeader}>
                РЕЗУЛЬТАТ ТЕСТА "{resultTest.testId.name}"
            </div>
            <div className={resultTest.testPassed ? classes.resultTestBannerResultSuccess : classes.resultTestBannerResultError}>
                <Grid container>
                    <Grid item xs={3}>
                        <div className={classes.resultTestBannerResultIcon}>
                            <AssignmentIcon style={{color: '#fff', height: 100, width: '14em'}} />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.resultTestBannerResultMeta}>
                            <div className={classes.resultTestBannerResultTitle}>
                                {resultTest.testPassed ? 'Тест пройден!' : 'Тест не пройден!'}
                            </div>
                            <div className={classes.resultTestBannerResultSubTitle}>
                                {resultTest.userId} прошел тест с результатом {resultTest.rightAnswer} из {resultTest.summaryAnswer}
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
                                {(resultTest.rightAnswer / resultTest.summaryAnswer) * 100}%
                            </div>
                            <div style={{color: '#848688'}}>
                                {resultTest.rightAnswer} из {resultTest.summaryAnswer} верных ответов
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

                    {
                        templateWithAnswer &&
                        Object.keys(templateWithAnswer).map((q: any) => (
                            <div className={classes.resultTestResultQuestionItem} key={q}>
                                <div className={classes.resultTestResultQuestionTitleSuccess}>
                                    <Typography align={"left"} variant="h5">
                                        <strong>{templateWithAnswer[q].name}</strong>
                                    </Typography>
                                </div>
                                {
                                    Object.keys(templateWithAnswer[q].answers).map((answers: any) => (
                                        <div className={classes.resultTestResultQuestionAnswerList} key={answers}>
                                            <div className={classes.resultTestResultQuestionAnswerItem}>
                                                {templateWithAnswer[q].answers[answers].name}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
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

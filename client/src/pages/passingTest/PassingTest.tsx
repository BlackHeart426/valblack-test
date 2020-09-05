import React, {useEffect, useRef, useState} from "react";
import {IListTestsInfo} from "../../store/reducers/testInfoReducer";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {getCategoriesActionCreator} from "../../store/action/categoriesAction";
import {setCurrentAnswerTestUser} from "../../store/action/currentUser/currentUserAction";
import {connect} from "react-redux";
import {IQuestion, Questions} from "./questionsAndAnswers/Questions";
import {useStylePassingTest} from "./stylePassingTest";
import {useHistory} from "react-router-dom";
import {resultTestService} from "../../services/resultTestService";
import {removeLocalStorage} from "../../services/auth.service";
import {setTestResultActionCreator} from "../../store/action/testResult/setTestResultAction";
import {setTestResultShortInfoActionCreator} from "../../store/action/testShortInfo/setTestResultShortInfoAction";

const PassingTest = (props: any) => {
    const history = useHistory();
    const classes = useStylePassingTest()
    const [questions, setQuestions] = useState<any>(null)
    const [currentQuestion, setCurrentQuestion] = useState<any>(null)
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const onSelectQuestionHandle = (id: any) => {
        setCurrentQuestion(questions[id])
        setSelectedQuestion(id)
    }

    //rewrite
    const onSaveAnswerHandle = (nextQuestions: string, selected: []) => {
        const answersCurrentTest = JSON.parse(props.answersCurrentTest)
        let questionArr = []
        if (answersCurrentTest.questions) {
            questionArr = answersCurrentTest.questions
        }
        questionArr.push({ '_id': selectedQuestion, answers: selected })
        if (nextQuestions) {
            setCurrentQuestion(questions[nextQuestions])
            setSelectedQuestion(nextQuestions)
        } else {
            const templateWithAnswerUser = resultTestService(questions,
                answersCurrentTest,
                props.uuidUser,
            )
            props.action.setTestResult(templateWithAnswerUser)
            props.action.setTestResultShortInfo(templateWithAnswerUser)
            //Отправка в сторе и на сервер и сохр в сторе
            history.push(`/rt/${answersCurrentTest.userTestID}`)
        }


        props.action.setAnswersCurrentTest({...answersCurrentTest, questions: questionArr})
    }
    useEffect(() => {
        removeLocalStorage('answersCurrentTest')
        const answersCurrentTest = JSON.parse(props.answersCurrentTest)
        if (props.arrTestsInfo) {
            const arrQuestions = JSON.parse(props.arrTestsInfo.filter((testInfo: IListTestsInfo) =>
                testInfo._id === answersCurrentTest.testId)[0].questionsAndAnswers)
            const currentQuestion = Object.keys(arrQuestions).map((item: any, index:number) => {
                return arrQuestions[item] =  { ...arrQuestions[item], _id: item }
            }).filter((item: any) => item.order === 1)[0]

            setQuestions(arrQuestions)
            setSelectedQuestion(currentQuestion._id)
            setCurrentQuestion(currentQuestion)
        } else {
            props.action.getInfoTests()
        }
    },[props.arrTestsInfo])

    return (
        <div className={classes.runTestContainer}>
            <div className={classes.runTestHeader}>
                <div className={classes.runTestTitle}>
                    йцу
                </div>
            </div>
            <div className={classes.runTestQuestion}>
                <Questions
                    question = {currentQuestion}
                    onSaveAnswer={onSaveAnswerHandle}
                />
            </div>

            <div className={classes.runTestSwitcher}>
                { questions && Object.keys(questions).map((item: any, index: number) => (
                    <div
                        key={item}
                        id="1"
                        className={(selectedQuestion === item)
                            ? classes.runTestQuestionTabSelected : classes.runTestQuestionTab}
                        ref={inputRef}
                        onClick={() => onSelectQuestionHandle(item)}>
                        {index+1}
                    </div>
                )) }
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        arrTestsInfo: state.testInfo.data,
        answersCurrentTest: state.currentUser.data.answersCurrentTest,
        uuidUser: state.currentUser.data.uuid,
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getInfoTests: () => dispatch(getTestInfoActionCreator()),
            setAnswersCurrentTest: (data: []) => dispatch(setCurrentAnswerTestUser(data)),
            setTestResult: (data: any) => dispatch(setTestResultActionCreator(data)),
            setTestResultShortInfo: (data: any) => dispatch(setTestResultShortInfoActionCreator(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassingTest)

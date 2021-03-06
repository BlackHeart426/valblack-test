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
    const [nameTest, setNameTest] = useState<string>('')
    const [currentQuestion, setCurrentQuestion] = useState<any>(null)
    const [disabledQuestions, setDisabledQuestions] = useState<any>(null)
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const onSelectQuestionHandle = (id: any, disabled: boolean) => {
        if (!disabled) {
            setCurrentQuestion(questions[id])
            setSelectedQuestion(id)
        }
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

        setDisabledQuestions(questionArr)
        props.action.setAnswersCurrentTest({...answersCurrentTest, questions: questionArr})
    }

    //rewrite
    useEffect(() => {
        // console.log('passing test',props.arrTestsInfo)
        if (props.arrTestsInfo) {
            const answersCurrentTest = JSON.parse(props.answersCurrentTest)

            const data = props.arrTestsInfo.filter((testInfo: IListTestsInfo) =>
                testInfo._id === answersCurrentTest.testId)[0]
            const arrQuestions = JSON.parse(data.questionsAndAnswers)
            const currentQuestion = Object.keys(arrQuestions).map((item: any, index:number) => {
                return arrQuestions[item] =  { ...arrQuestions[item], _id: item }
            }).filter((item: any) => {
                //rewrite

                if (answersCurrentTest.questions) {
                    //есть ли итем внутри массива если нет то обычный return если есть то не возвращаем
                    let check = false
                    answersCurrentTest.questions.forEach((q: any) => {
                        if (item._id == q._id) {
                            check = true
                        }
                    })
                    if (check) {
                    } else {
                        return item
                    }

                } else {
                    return item.order === 1
                }

            })[0]
            setNameTest(data.name)
            setQuestions(arrQuestions)
            //проверить массив заблокированных вопросов и 1 которого там нет вывести в текущий
            setCurrentQuestion(currentQuestion)
            setSelectedQuestion(currentQuestion._id)
            setDisabledQuestions(answersCurrentTest.questions)


        } else {
            props.action.getInfoTests()
        }
    },[props.arrTestsInfo])

    return (
        <div className={classes.runTestContainer}>
            <div className={classes.runTestHeader}>
                <div className={classes.runTestTitle}>
                    {nameTest}
                </div>
            </div>
            <div className={classes.runTestQuestion}>
                <Questions
                    question = {currentQuestion}
                    onSaveAnswer={onSaveAnswerHandle}
                />
            </div>

            <div className={classes.runTestSwitcher}>
                { questions && Object.keys(questions).map((item: any, index: number) => {
                    let disabled = false

                    disabledQuestions && disabledQuestions.map((disabledQuestion: any) => {

                        // console.log('disabledQuestions',disabledQuestion._id)
                        // console.log('item',item)
                        if (disabledQuestion._id === item) {
                            disabled = true
                        }
                    })
                    return <div
                        key={item}
                        id="1"
                        className={disabled
                            ? classes.runTestQuestionTabDisabled :
                            (selectedQuestion === item)
                                ? classes.runTestQuestionTabSelected : classes.runTestQuestionTab}
                        ref={inputRef}
                        // onClick={() => onSelectQuestionHandle(item, disabled)}
                    >
                        {index+1}
                    </div>
                }) }
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

import React, {useEffect, useRef, useState} from "react";
import {IListTestsInfo} from "../../store/reducers/testInfoReducer";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {getCategoriesActionCreator} from "../../store/action/categoriesAction";
import {setCurrentAnswerTestUser} from "../../store/action/currentUser/currentUserAction";
import {connect} from "react-redux";
import {IQuestion, Questions} from "./questionsAndAnswers/Questions";
import {useStylePassedTest} from "./stylePassedTest";

const PassingTest = (props: any) => {
    const classes = useStylePassedTest()
    const [questions, setQuestions] = useState<any>(null)
    const [currentQuestion, setCurrentQuestion] = useState<any>(null)
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const onSelectQuestionHandle = (id: any) => {
        console.log(id)
        setCurrentQuestion(questions[id])
        setSelectedQuestion(id)
    }

    const onSelectedAnswerHandle = (nextQuestions: string) => {
        setCurrentQuestion(questions[nextQuestions])
    }
    useEffect(() => {
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
                    selectedAnswer={onSelectedAnswerHandle}
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
        answersCurrentTest: state.currentUser.data.answersCurrentTest
    }

}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getInfoTests: () => dispatch(getTestInfoActionCreator()),
            setAnswersCurrentTest: (data: { answersCurrentTest: any }) => dispatch(setCurrentAnswerTestUser(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassingTest)

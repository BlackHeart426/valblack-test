import React, {useEffect, useRef, useState} from "react";
import {IListTestsInfo} from "../../store/reducers/testInfoReducer";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {getCategoriesActionCreator} from "../../store/action/categoriesAction";
import {setCurrentAnswerTestUser} from "../../store/action/currentUser/currentUserAction";
import {connect} from "react-redux";
import {Questions} from "./questionsAndAnswers/Questions";
import {useStylePassedTest} from "./stylePassedTest";

const PassingTest = (props: any) => {
    const classes = useStylePassedTest()
    const [testInfo, setTestInfo] = useState<IListTestsInfo>({
        category: "", durationOfTime: null, imageSrc: "", name: "", questions: 0, rating: 0
    })
    const inputRef = useRef<HTMLInputElement>(null)

    const openQuestionHandle = (event: any) => {
        console.log(inputRef)
    }

    useEffect(() => {
        const answersCurrentTest = JSON.parse(props.answersCurrentTest)
        props.arrTestsInfo
            ? setTestInfo(prev => props.arrTestsInfo.filter((testInfo: IListTestsInfo) => testInfo._id === answersCurrentTest.testId)[0])
            : props.action.getInfoTests()
    },[props.arrTestsInfo])

    return (
        <div>
            PassingTest
                <Questions/>
                <div className={classes.runTestSwitcher}>
                    <div id="1" className={classes.runTestQuestionTab} ref={inputRef} onClick={openQuestionHandle}>
                        1
                    </div>
                    <div id="2" className={classes.runTestQuestionTab} ref={inputRef}  onClick={openQuestionHandle}>
                        2
                    </div>
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

import React, {useEffect, useState} from "react";
import {IListTestsInfo} from "../../store/reducers/testInfoReducer";
import {getTestInfoActionCreator} from "../../store/action/testInfoAction";
import {getCategoriesActionCreator} from "../../store/action/categoriesAction";
import {setCurrentAnswerTestUser} from "../../store/action/currentUser/currentUserAction";
import {connect} from "react-redux";

const PassingTest = (props: any) => {
    const [testInfo, setTestInfo] = useState<IListTestsInfo>({
        category: "", durationOfTime: null, imageSrc: "", name: "", questions: 0, rating: 0
    })


    useEffect(() => {
        const answersCurrentTest = JSON.parse(props.answersCurrentTest)
        console.log(answersCurrentTest.testId)

        props.arrTestsInfo
            ? setTestInfo(prev => props.arrTestsInfo.filter((testInfo: IListTestsInfo) => testInfo._id === answersCurrentTest.testId)[0])
            : props.action.getInfoTests()
    },[props.arrTestsInfo])

    return (
        <div>
            PassingTest
            <pre>
                {JSON.stringify(testInfo)}
            </pre>
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

import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getTestInfoActionCreator} from "../store/action/testInfoAction";

const InfoTests = (props: any) => {

    useEffect(() => {
        props.action.getInfoTests()
    },[])
    console.log(props.arrTestsInfo)


    return(
        <div>
            <h1>TestPage</h1>
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

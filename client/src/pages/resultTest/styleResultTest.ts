import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {blue, grey} from "@material-ui/core/colors";

export const useStyleResultTest = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        resultTestContainer: {

            paddingTop: 50,
            maxWidth: '1060px',
            margin: '0 auto'
        },
        resultTestHeader: {
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '1.5em',
            marginBottom: '1em'
        },
        resultTestTitle: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            paddingTop: 10,
            paddingBottom: 10
        },
        resultTestBannerResultSuccess: {
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            height: 120,
            borderRadius: 5,
            background: 'repeating-linear-gradient(45deg,#47834a,#47834a 175px,#66bb6a 0,#66bb6a 750px)'
        },
        resultTestBannerResultIcon: {
            flexGrow: 2,
            textAlign: 'center',
            fontSize: '6.5em'
        },
        resultTestBannerResultMeta: {
            fontWeight: 400,
            color: '#fff',
            padding: '2em 4.5em'
        },
        resultTestBannerResultTitle: {
            fontSize: '1.5em',
            fontWeight: 400,
        },
        resultTestBannerResultSubTitle: {
            fontWeight: 400,
            margin: 0
        },
        resultTestResult: {
            marginTop: '2em',
        },
        resultTestResultTitle: {
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '1.5em',
        },
        resultTestResultItems: {
            textAlign: 'center',
            marginTop: '1em',
            marginBottom: '1em',
            display: 'flex',
            justifyContent: 'space-around'
        },
        resultTestResultItem: {

            fontSize: '3em',
            lineHeight: '100%',
            fontWeight: 400,
            color: '#4c4c4c'
        },
        resultTestBody: {


        },
        wrapperQuestions: {


        },
        wrapperQuestionsTitle: {
            textTransform: 'uppercase',
            fontWeight: 600,
            fontSize: '1.5em',
            marginBottom: '1em'
        },
        resultTestResultQuestionItem: {


        },
        resultTestResultQuestionTitle: {
            boxShadow: '0 0 2px rgba(0,0,0,0.5)',
            padding: '.75em',
            margin: 0,
            borderBottom: '.08333rem solid #e8edee',
            background: 'linear-gradient(45deg,#fff 95%,#94cf97 0)'
        },
        resultTestResultQuestionAnswerList: {


        },
        resultTestResultQuestionAnswerItem: {
            boxShadow: '0 0 2px rgba(0,0,0,0.5)',
            margin: '0',
            borderBottom: '.08333rem solid #e8edee',
            padding: '1em 2em',
            lineHeight: 2,
            color: '#3a3a3a',
            backgroundColor: '#fff',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: 'auto',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between'

        },
    }),
);
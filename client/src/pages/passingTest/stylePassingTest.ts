import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {blue, grey} from "@material-ui/core/colors";

export const useStylePassingTest = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        runTestContainer: {

            paddingTop: 50,
            maxWidth: '960px',
            margin: '0 auto',
            [theme.breakpoints.down('sm')]: {
                padding: 10,
                margin: "0 auto"
            },
            [theme.breakpoints.up('md')]: {
                padding: 10,
                margin: "0 auto"
            },
            [theme.breakpoints.up('lg')]: {
                padding: 10,
                margin: "0 auto"
            },
        },
        runTestHeader: {
            borderBottom:  '1px solid #b4b4b4',
            display: 'flex',
            marginBottom: 20,
            justifyContent: 'space-between'
        },
        runTestTitle: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            paddingTop: 10,
            paddingBottom: 10
        },
        runTestQuestion: {
            marginTop: 5,
            marginBottom: 10
        },
        runTestSwitcher: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            zIndex: 1005,
            display: 'flex',
            justifyContent: 'space-evenly'
        },
        runTestQuestionTab: {

            padding: '1em 0',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            fontSize: '1.25em',
            fontWeight: 300,
            "&:hover": {
                backgroundColor: '#d1d1d1'
            },
            '&:not(:last-child)': {
                borderRight: '1px solid #b0b0b0 ',
            },
            '& selected': {
                backgroundColor: blue[200]
            }
        },
        runTestQuestionTabSelected: {
            padding: '1em 0',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            fontSize: '1.25em',
            fontWeight: 300,
            background:  'rgba(91,131,255,0.6)',
            color: '#fff',
            '&:not(:last-child)': {
                borderRight: '1px solid #b0b0b0 ',
            },
            '& selected': {
                backgroundColor: blue[200]
            }
        },
        runTestQuestionTabDisabled: {
            padding: '1em 0',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            fontSize: '1.25em',
            fontWeight: 300,
            background:  'rgba(201,201,201,0.6)',
            color: '#fff',
            '&:not(:last-child)': {
                borderRight: '1px solid #b0b0b0 ',
            },
        }

    }),
);

import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {blue, grey} from "@material-ui/core/colors";

export const useStylePassedTest = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        runTestContainer: {

        },
        runTestHeader: {

        },
        runTestQuestion: {

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
        }

    }),
);

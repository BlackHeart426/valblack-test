import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {blue, grey} from "@material-ui/core/colors";

export const useQuestion = makeStyles((theme: Theme) =>
    createStyles({
        questionTitle: {
            fontWeight: 'bold',
            paddingTop: 10,
            paddingLeft: 10,
            paddingBottom: 10
        },
        questionBody: {
            marginBottom: 20
        },
        questionAnswerList: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        },
        questionAnswerItem: {
            padding: '15px 30px',
            marginTop: 1
        },

    }),
);

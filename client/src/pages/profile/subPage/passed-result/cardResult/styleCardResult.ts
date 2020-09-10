import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleCardResult = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 10,
            cursor: 'pointer',
            "&:hover": {
                boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }
        },
        rightAnswer: {
            [theme.breakpoints.down('sm')]: {
                paddingLeft: '84px',
            },
        },
        card: {
            padding: 10
        }
    }),
);

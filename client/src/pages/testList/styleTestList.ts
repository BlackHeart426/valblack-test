import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleTestList = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        wrapper: {
            width: 'calc(100vw - 100px)',
            height: '100%',
            margin: '0 auto',
            maxWidth: '1200px'
        },
        container: {
            padding: '40px 50px'
        },
        content: {

        },
        filters: {

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

    }),
);

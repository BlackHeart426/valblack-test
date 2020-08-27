import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleTestInfo = makeStyles((theme: Theme) =>
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
        backgroundTop: {
            backgroundColor: '#2b3137',
            height: '300px',
            color: '#fff'
        },
        container: {
            position: 'relative',
            padding: '40px 0'
        },
        content: {
            width: '60%'
        },
        boxCardInfo: {
            right: 0,
            top: 0,
            position: 'absolute',
            zIndex: 1000
        },
        cardInfoContainer: {
            fixed: '1',
            width: '350px',
        },
        cardContent: {
            textAlign: 'left',
        },
        rating: {

        },
        cardInfoImage: {
        },
        cardInfoBody: {
        },
        cardInfoAction: {
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

    }),
);

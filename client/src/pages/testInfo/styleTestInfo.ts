import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleTestInfo = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        wrapper: {
            width: 'calc(100vw - 100px)',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '100%',
            },
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
            padding: '40px 0',
            [theme.breakpoints.down('sm')]: {
                padding: 5,
            },
            [theme.breakpoints.up('md')]: {
                padding: 5,
            },
            [theme.breakpoints.up('lg')]: {
                padding: 5,
            },

        },
        content: {
            width: '60%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
            [theme.breakpoints.up('lg')]: {
                width: '100%',
            },
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
            [theme.breakpoints.down('sm')]: {
                paddingTop: 150,
                margin: "0 auto"
            },
            [theme.breakpoints.up('md')]: {
                paddingTop: 150,
                margin: "0 auto"
            },
            [theme.breakpoints.up('lg')]: {
                paddingTop: 150,
                margin: "0 auto"
            },
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },

    }),
);

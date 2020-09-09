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
            maxWidth: '1200px',
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
        container: {
            padding: '40px 50px',
            [theme.breakpoints.down('sm')]: {
                padding: '10px 50px',
            },
            [theme.breakpoints.up('md')]: {
                padding: '10px 50px',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '10px 50px',
            },
        },
        content: {

        },
        filters: {

        },
        filterTop: {
            margin: '1rem 0'
        },
        paper: {
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                padding: 10,
            },
            [theme.breakpoints.up('md')]: {
                padding: 10,
            },
            [theme.breakpoints.up('lg')]: {
                padding: 10,
            },
            textAlign: 'center',
            color: theme.palette.text.secondary,
            minWidth: 240
        },

    }),
);

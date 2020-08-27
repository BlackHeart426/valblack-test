import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: '#f7f7fa',
            maxWidth: '1200px'
        },
        grow: {
            flexGrow: 1,
            maxHeight: 80
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        account: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2),
        },
        menuIcons: {
            minWidth: 32
        },
        title: {
            cursor: 'pointer',
            marginRight: '15px',
            marginLeft: '15px',
            // display: 'none',
            [theme.breakpoints.up('sm')]: {
                // display: 'block',
                marginRight: '25px',
                marginLeft: '25px',
            },
        },
        footer: {
            minHeight: 'calc(100vh - 80px)'
        }
    }),
);

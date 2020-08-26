import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleFilter = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        autocomplete: {
            margin: '0 auto'
        }

    }),
);

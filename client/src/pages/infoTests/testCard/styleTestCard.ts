import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleTestCard = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        title: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            fontWeight: 500,
            maxHeight: '42px',
            fontSize: '15px'
        }

    }),
);

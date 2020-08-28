import {createStyles, fade, makeStyles, Theme} from "@material-ui/core/styles";

export const styleCardActivity = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 10
        },
        card: {
            padding: 10
        }
    }),
);

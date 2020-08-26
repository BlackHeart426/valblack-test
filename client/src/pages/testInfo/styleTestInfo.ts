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
            backgroundColor: '#aeaeae',
            height: '300px'
        },
        container: {
            position: 'relative',
            padding: '40px 50px'
        },
        content: {
            width: '60%'
        },
        boxCardInfo: {
            right: -800,
            top: 0,
            width: '100%',
            position: 'absolute',
            zIndex: 1000
        },
        cardInfoContainer: {
          width: '300px'
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

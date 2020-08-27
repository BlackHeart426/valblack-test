import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyleProfile = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: 50,
            width: 'calc(100vw - 100px)',
            height: '100%',
            margin: '0 auto',
            maxWidth: '1200px'
        },
        leftSide: {
        },
        rightSide: {
            border:  '1px solid #fff'
        },
        avatar: {
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            border: '2px solid #d8ddde'
        },
        avatarContainer: {
           textAlign: 'center'
        },
        userName: {
            marginTop: 20
        },
        actionSettings: {
            marginTop: 10
        }

    }),
);

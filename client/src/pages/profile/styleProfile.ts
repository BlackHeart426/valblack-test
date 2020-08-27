import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyleProfile = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: 30,
            width: 'calc(100vw - 100px)',
            height: '100%',
            margin: '0 auto',
            maxWidth: '1200px'
        },
        leftSide: {
        },
        rightSide: {
        },
        tabs: {
            borderBottom:  '1px solid #d8ddde'
        },
        avatar: {
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
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

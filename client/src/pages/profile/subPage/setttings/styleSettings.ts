import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyleSettings = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: 10,
            paddingBottom: 10,
        },
        avatarChange: {
            paddingTop: 20,
            paddingBottom: 10,
            borderBottom:  '1px solid #d8ddde'
        },
        titleAvatar: {
            paddingTop: 5,
            paddingBottom: 5,
        },
        avatar: {
            width: '200px',
            height: '200px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        },
        avatarContent: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        },
        nameChange: {
            paddingTop: 20,
        },
        nameChangeInput: {
            background: "white",
            marginTop: 5
        },
        buttonSave: {
            marginTop: 15
        },
        uploadAvatar: {
            width: 380,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        }
    }),
);

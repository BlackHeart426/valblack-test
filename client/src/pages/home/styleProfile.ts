import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyleHome = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: 'url(https://cdn.proghub.ru/home/background.svg),#2b3137'
        },
        container: {
            color: '#fff',
            display: 'flex',
            padding: '1em',
            minHeight: '500px',
            maxWidth: '1304px',
            margin: '0 auto'

        },
        welcome: {
            flex: '2 1 60%',
            marginRight: '2em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        exampleQuestion: {
            flex: '1 1 40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        codeContainer: {
            zIndex: 1000,
            width: '350px',
            height: '200px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        },


    }),
);

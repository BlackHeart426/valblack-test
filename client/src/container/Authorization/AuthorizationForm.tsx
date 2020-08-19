import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Grid, Divider, Box, Hidden} from "@material-ui/core";
import { AuthorizationRightSide } from "./AuthorizationRightSide";
import { AuthorizationLeftSide } from "./AuthorizationLeftSide";
import Typography from "@material-ui/core/Typography";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootForm: {
            //width: 800,
            // display: 'none',
            [theme.breakpoints.down('md')]: {
                // display: 'block',
                width: '100%',
            },
        },
        leftSide: {
            width: 417,
            [theme.breakpoints.down('md')]: {
                // display: 'block',
                width: '95%',
                marginRight: 0,
                padding: 0,
            },
            padding: 10,
            marginLeft: 10
        } ,
        rightSide: {
            width: 420,
            [theme.breakpoints.down('md')]: {
                // display: 'block',
                width: '95%',
                marginLeft: 0,
            },
            padding: 10,
            marginRight: 20
        },
        leftSideDiv: {
            [theme.breakpoints.down('md')]: {
                padding: 0,
            },
            padding: 10,
        }
        }
    )
)

export function AuthorizationForm(props: any) {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const {onHideModal, form} = props;

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    interface TabPanelProps {
        children?: React.ReactNode;
        dir?: string;
        index: any;
        value: any;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        );
    }

    return (
        <Grid className={classes.rootForm} container alignItems="center">
            <div className={classes.leftSide} >
                <div style={{padding:10}}>
                    <AuthorizationLeftSide onHideModal={onHideModal}/>
                </div>
            </div>
            <div style={{flexGrow: 1}}></div>
            <Hidden xsDown><Divider orientation="vertical" flexItem /></Hidden>
            <div style={{flexGrow: 1}}></div>
            <div className={classes.rightSide}>
                <AuthorizationRightSide form={form} onHideModal={onHideModal}/>
            </div>
        </Grid>
        // <>
        //     <div className={classes.leftSide} >
        //         <div className={classes.leftSideDiv}>
        //             <AuthorizationLeftSide onHideModal={onHideModal}/>
        //         </div>
        //     </div>
        //     <div className={classes.rightSide}>
        //         <AuthorizationRightSide form={form} onHideModal={onHideModal}/>
        //     </div>
        // </>

    )
}

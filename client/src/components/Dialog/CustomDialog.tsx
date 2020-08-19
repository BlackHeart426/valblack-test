import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import {
    createStyles,
    Theme,
    WithStyles,
    withStyles,
    Typography,
    IconButton,
    Grid,
    CardContent
} from '@material-ui/core';
import {grey} from "@material-ui/core/colors";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

interface IProps {

}

export const CustomDialog = withStyles(styles)((props: any) => {
    const {classes, size = 'xs'} = props;
    const [open, setOpen] = React.useState(false);
    const {show, onHide, data, extendData=false} = props;

    useEffect(() => {
        setOpen(show)
    },[show])

    const handleClose = () => {
        setOpen(false);
        onHide()
    };

    return (
        <div>
            <Dialog maxWidth={size} fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {data.title}
                </DialogTitle>
                <>
                    {extendData ? <Grid container>
                            <Grid item xs={4} style={{background: grey[200]}}>
                                <div>{extendData}</div>
                            </Grid>
                            <Grid item xs={8}>
                                <DialogContent dividers>
                                    {data.content}
                                </DialogContent>
                                {data.action
                                && <DialogActions>
                                    {data.action}
                                </DialogActions>
                                }
                            </Grid>
                        </Grid>
                        : <>
                            <DialogContent dividers>
                                {data.content}
                            </DialogContent>
                            {data.action
                            && <DialogActions>
                                {data.action}
                            </DialogActions>}
                        </>
                    }
                </>
            </Dialog>
        </div>
    );
})

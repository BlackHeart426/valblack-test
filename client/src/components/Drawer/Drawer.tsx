import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {connect} from "react-redux";
import {openDrawerActionCreator} from "../../store/action/app";
import {ListItem, ListItemText, ListItemIcon, Avatar, Grid, IconButton, Divider} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useStylesDrawer} from "./stylesDrawer";
import ListAltIcon from '@material-ui/icons/ListAlt';

export const drawerWidth = 240;

const TemporaryDrawer = (props: any) => {
    const classes = useStylesDrawer()
    const theme = useTheme();
    const history = useHistory()

    const handleDrawerClose = () => {
        props.action.openDrawer()
    }

    const handleTests = () => {
        history.push("/tests")
        props.action.openDrawer()
    }

    const list = () => (
        <div
            className={classes.drawer}
            role="presentation"
        >
            <div className={classes.toolbar} onClick={handleDrawerClose}>
                <IconButton >
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List >
                <ListItem button onClick={handleTests}>
                    <ListItemIcon>
                        <ListAltIcon/>
                    </ListItemIcon>
                    <ListItemText >
                        Тесты
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <Drawer
                onClose={handleDrawerClose}
                variant="temporary"
                open={ props.openDrawer }
                anchor="left"
            >
                {list()}
            </Drawer>
        </>
    );
}

function mapStateToProps(state: any) {
    return {
        openDrawer: state.app.openDrawer,
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            openDrawer: () => dispatch(openDrawerActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TemporaryDrawer);

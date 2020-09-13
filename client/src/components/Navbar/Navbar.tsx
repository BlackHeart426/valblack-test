import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Avatar, Button, Divider, Hidden, ListItemIcon} from '@material-ui/core';
import {AccountCircle, MenuBook} from "@material-ui/icons";
import {useStyles} from "./styles";
import { useHistory} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import WebIcon from '@material-ui/icons/Web';
import {AuthorizationModal} from "../../container/Authorization/AuthorizationModal";
import {connect} from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import {logoutActionCreate} from "../../store/action/currentUser/currentUserAction";
import {LISTTESTS, PROFILE, SETTINGS} from "../../router/enum";
import {openDrawerActionCreator} from "../../store/action/app";

function Navbar(props: any) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const history = useHistory();

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleOpenMyBlog = () => {
        history.push("/"+props.pageCurrentUser)
        handleMenuClose()
    };
    // const handleOpenIncome = () => {
    //     history.push(PROFILE)
    //     handleMenuClose()
    // };
    // const handleOpenSettings = () => {
    //     history.push(SETTINGS)
    //     handleMenuClose()
    // };

    const handleDrawerOpen = () => {
        props.action.openDrawer()
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const handleTests = () => {
        history.push("/tests")
    }
    const handleHome = () => {
        history.push("/")
    }
    const handleLogout = () => {
        props.action.logout()
        handleMenuClose()
    };
    const handleOpenIncome = () => {
        history.push(PROFILE)
        handleMenuClose()
    };
    const handleOpenSettings = () => {
        history.push(SETTINGS)
        handleMenuClose()
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {props.pageCurrentUser && <MenuItem onClick={handleOpenMyBlog}>
              <ListItemIcon className={classes.menuIcons}>
                <WebIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">My page</Typography>
            </MenuItem>}
            <MenuItem onClick={handleOpenIncome}>
                <ListItemIcon className={classes.menuIcons}>
                    <AccountBalanceWalletIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Профиль</Typography>
            </MenuItem>
            {/*<MenuItem onClick={handleOpenSettings}>*/}
            {/*    <ListItemIcon className={classes.menuIcons}>*/}
            {/*        <SettingsIcon fontSize="small" />*/}
            {/*    </ListItemIcon>*/}
            {/*    <Typography variant="inherit">Настройки</Typography>*/}
            {/*</MenuItem>*/}
            <Divider/>
            <MenuItem onClick={handleLogout}>
                <ListItemIcon className={classes.menuIcons}>
                    <ExitToAppIcon color={"primary"} fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" color={"primary"}><strong>Выйти</strong></Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root} >
            <div className={classes.grow}>
                <AppBar position="fixed" elevation={0} >
                    <Toolbar style={{padding: 0}} variant="dense">
                        <Hidden lgUp>
                            <IconButton
                                edge="start"
                                className={classes.drawerButton}
                                color="inherit"
                                onClick={handleDrawerOpen}
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography className={classes.title} variant="h5" noWrap  onClick={handleHome}>
                            valBlack-test
                        </Typography>
                        <Hidden smDown>
                            <div className={classes.menuButton}>
                                <Button
                                    size="large"
                                    color="inherit"
                                    onClick={handleTests}
                                >
                                    Тесты
                                </Button>
                            </div>
                            <div className={classes.menuButton}>
                                <Button
                                    size="large"
                                    color="inherit"
                                >
                                    Рейтинг
                                </Button>
                            </div>
                        </Hidden>

                        {props.isAuthorized
                            ? <>
                                <div className={classes.grow} />
                                <div className={classes.account} >
                                    <Button
                                        size="medium"
                                        color="inherit"
                                        startIcon={<Avatar alt="Remy Sharp" src={props.avatarUrl} />}
                                        onClick={handleProfileMenuOpen}
                                    >
                                        <Hidden smDown>
                                            {props.email}
                                        </Hidden>
                                    </Button>

                                </div>
                            </>
                            :
                            <>
                                <div className={classes.grow} />
                                <div className={classes.menuButton}>
                                    <AuthorizationModal register={true}/>
                                </div>
                                <div className={classes.menuButton}>
                                    <AuthorizationModal login={true} />
                                </div>
                            </>
                        }
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        </div>

    );
}
function mapStateToProps(state: any) {
    return {
        isAuthorized: state.currentUser.data.isAuthorized,
        email: state.currentUser.data.email,
        avatarUrl: state.currentUser.data.avatarUrl,
        openDrawer: state.app.openDrawer
    }

}


function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            logout: () => dispatch(logoutActionCreate()),
            openDrawer: () => dispatch(openDrawerActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

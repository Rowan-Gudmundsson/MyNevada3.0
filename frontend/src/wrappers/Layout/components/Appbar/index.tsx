import React from 'react';

import clsx from 'clsx';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MUIAppbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

type ClassNames = 'root' | 'drawerOpen' | 'menuButton' | 'hide' | 'toolbar';

interface Props {
    handleDrawer: (open: boolean) => (e: any) => void;
    open: boolean;
    large: boolean;
    classes?: Record<ClassNames, string>;
};

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerOpen: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            width: '100%',
        },
        marginLeft: theme.spacing(30),
        width: `calc(100% - ${theme.spacing(30)}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        padding: theme.spacing(0, 2),
    }
}));

export const Appbar: React.FC<Props> = ({ handleDrawer, open, large }) => {
    const classes = useStyles();

    return (
        <MUIAppbar
            position="fixed"
            className={clsx(classes.root, {
                [classes.drawerOpen]: open,
            })}
        >
            <Toolbar className={classes.toolbar}>
                {!large && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer(true)}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant="h6" noWrap>
                    Student Center
                    </Typography>
            </Toolbar>
        </MUIAppbar>
    )
}

export default Appbar;
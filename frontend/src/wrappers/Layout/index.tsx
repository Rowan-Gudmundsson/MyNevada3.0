import React, { useState } from 'react';

import clsx from 'clsx';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import Appbar from './components/Appbar';
import MobileDrawer from './components/MobileDrawer';
import MediumDrawer from './components/MediumDrawer';
import LargeDrawer from './components/LargeDrawer';

type ClassNames = 'root' | 'content' | 'contentShift';

interface Props { };

interface State {
    drawerOpen: boolean;
};

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        [theme.breakpoints.down('xs')]: { // mobile
            top: theme.spacing(7),
            height: `calc(100% - ${theme.spacing(7)}px)`,
            left: 0,
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1, 1, 0, 1),
            width: `calc(100% - ${theme.spacing(7) + 1}px)`,
        },
        [theme.breakpoints.up('lg')]: { // desktop
            left: theme.spacing(30),
            width: `calc(100% - ${theme.spacing(30)}px)`,
        },
        height: `calc(100% - ${theme.spacing(8)}px)`,
        top: theme.spacing(8),
        left: theme.spacing(7) + 1,
        width: '100%',
        display: 'flex',
        position: 'fixed',
        transition: theme.transitions.create(['left', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        '&:focus': {
            outline: '0px solid transparent',
        }
    },
    contentShift: {
        [theme.breakpoints.down('xs')]: { // mobile
            left: 0,
        },
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${theme.spacing(30)}px)`,
        },
        left: theme.spacing(30),
        transition: theme.transitions.create(['left', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

export const Layout: React.FC<Props> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawer = (open: boolean) => (e: any) => {
        setDrawerOpen(open);
    }

    const classes = useStyles();
    const theme = useTheme();

    const mobile = useMediaQuery(theme.breakpoints.down('xs'));
    const desktop = useMediaQuery(theme.breakpoints.up('lg'));

    const Drawer = mobile
        ? MobileDrawer
        : desktop
            ? LargeDrawer
            : MediumDrawer;

    return (
        <div className={classes.root}>
            <Appbar handleDrawer={handleDrawer} open={drawerOpen} large={desktop} />
            <Drawer handleDrawer={handleDrawer} open={drawerOpen} />
            <div
                tabIndex={-1}
                className={clsx(classes.content, {
                    [classes.contentShift || '']: drawerOpen,
                })}
                onFocus={handleDrawer(false)}
            >
                {children}
            </div>
        </div>
    );
}

export default Layout;
import React from 'react';

import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

import UNRLogo from 'icons/UNRLogo';

import DrawerContent from '../DrawerContent';

type ClassNames = 'root' | 'toolbar' | 'drawerClosed' | 'drawerOpen' | 'logo';

interface Props {
    open: boolean;
    handleDrawer: (open: boolean) => (e: any) => void;
}

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {
        width: theme.spacing(7) + 1,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '&$drawerClosed': {
            width: theme.spacing(7) + 1,
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        '&$drawerOpen': {
            width: theme.spacing(30),
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    },
    toolbar: {
        paddingLeft: theme.spacing(),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: theme.spacing(8),
    },
    drawerClosed: {},
    drawerOpen: {},
    logo: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '70%',
        alignItems: 'center',
        '& span': {
            marginLeft: theme.spacing(),
            textAlign: 'justify',
        }
    }
}));

export const MediumDrawer: React.FC<Props> = ({ open, handleDrawer }) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.root, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClosed]: !open,
                })
            }}
        >
            <div className={classes.toolbar}>
                <div className={classes.logo}>
                    <UNRLogo size="small" />
                    <Typography variant="caption">University of Nevada<br />Reno</Typography>
                </div>
                <IconButton onClick={handleDrawer(false)}>
                    <Icon>keyboard_arrow_left</Icon>
                </IconButton>
            </div>
            <Divider />
            <DrawerContent handleDrawer={handleDrawer} open={open} />
        </Drawer>
    );
}

export default MediumDrawer;
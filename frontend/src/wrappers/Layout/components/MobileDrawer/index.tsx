import React from 'react';

import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles, Theme } from '@material-ui/core/styles';

import DrawerContent from '../DrawerContent';

type ClassNames = 'root' | 'toolbar';

interface Props {
    open: boolean;
    handleDrawer: (open: boolean) => (e: any) => void;
}

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {},
    toolbar: {
        height: theme.spacing(7),
    }
}));

export const MobileDrawer: React.FC<Props> = ({ open, handleDrawer }) => {
    const classes = useStyles();

    return (
        <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={handleDrawer(false)}
            onOpen={handleDrawer(true)}
        >
            <div className={classes.toolbar} />
            <Divider />
            <DrawerContent open={open} />
        </SwipeableDrawer>
    );
}

export default MobileDrawer;
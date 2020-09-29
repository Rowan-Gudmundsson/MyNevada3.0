import React from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
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
        height: theme.spacing(8),
    },
}));

export const LargeDrawer: React.FC<Props> = ({ open, handleDrawer }) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
        >
            <div className={classes.toolbar} />
            <Divider />
            <DrawerContent open={true} />
        </Drawer>
    );
}

export default LargeDrawer;
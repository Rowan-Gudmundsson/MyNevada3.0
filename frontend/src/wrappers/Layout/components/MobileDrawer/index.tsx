import React from 'react';

import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

import UNRLogo from 'icons/UNRLogo';

import DrawerContent from '../DrawerContent';

type ClassNames = 'root' | 'toolbar' | 'logo' | 'scrollable';

interface Props {
    open: boolean;
    handleDrawer: (open: boolean) => (e: any) => void;
}

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {},
    toolbar: {
        paddingLeft: `calc((${theme.spacing(7)}px - 50px) / 2)`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: theme.spacing(7),
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& span': {
            marginLeft: theme.spacing(),
            textAlign: 'left',
        }
    },
    scrollable: {
        overflowY: 'auto',
        height: `calc(100% - ${theme.spacing(7)})`
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
            <div className={classes.toolbar}>
                <div className={classes.logo}>
                    <UNRLogo size="small" />
                    <Typography variant="caption">University of Nevada<br />Reno</Typography>
                </div>
            </div>
            <Divider />
            <div className={classes.scrollable}>
                <DrawerContent open={open} handleDrawer={handleDrawer} closeOnLink />
            </div>
        </SwipeableDrawer>
    );
}

export default MobileDrawer;
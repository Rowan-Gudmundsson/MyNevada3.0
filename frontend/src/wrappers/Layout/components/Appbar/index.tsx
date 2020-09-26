import React from 'react';

import clsx from 'clsx';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MUIAppbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

type ClassNames = 'root' | 'drawerOpen' | 'menuButton' | 'hide' | 'toolbar';

interface Props {
    handleDrawerOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
    drawerOpen: boolean;
    classes?: Record<ClassNames, string>;
};

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerOpen: {
        marginLeft: theme.spacing(40),
        width: `calc(100% - ${theme.spacing(40)}px)`,
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
});

export class Appbar extends React.Component<Props> {

    render = () => {
        const {
            handleDrawerOpen,
            drawerOpen,
            classes,
        } = this.props;

        return (
            <MUIAppbar
                position="fixed"
                className={clsx(classes?.root, {
                    [classes?.drawerOpen || '']: drawerOpen,
                })}
            >
                <Toolbar className={classes?.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes?.menuButton, {
                            [classes?.hide || '']: drawerOpen,
                        })}
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Student Center
                    </Typography>
                </Toolbar>
            </MUIAppbar>
        );
    }
}

export default withStyles(styles)(Appbar);
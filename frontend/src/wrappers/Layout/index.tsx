import React from 'react';

import clsx from 'clsx';

import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

import Appbar from './components/Appbar';
import Drawer from './components/Drawer';

type ClassNames = 'root' | 'content' | 'contentShift';

interface Props {
    classes?: Record<ClassNames, string>;
};

interface State {
    drawerOpen: boolean;
};

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        height: `calc(100% - ${theme.spacing(8)}px)`,
        width: '100%',
        display: 'flex',
        position: 'fixed',
        top: theme.spacing(8),
        left: theme.spacing(7) + 1,
        padding: theme.spacing(1, 0, 0, 1),
        transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        '&:focus': {
            outline: '0px solid transparent',
        }
    },
    contentShift: {
        left: theme.spacing(40),
        transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
});

export class Layout extends React.Component<Props, State> {
    state: State = {
        drawerOpen: false,
    }

    handleDrawerOpen = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        this.setState({ drawerOpen: true });
    }

    handleDrawerClose = (e: React.MouseEvent<HTMLButtonElement> | React.FocusEvent<HTMLDivElement>) => {
        this.setState({ drawerOpen: false });
    }

    render = () => {
        const { classes, children } = this.props;
        const { drawerOpen } = this.state;
        return (
            <div className={classes?.root}>
                <Appbar handleDrawerOpen={this.handleDrawerOpen} drawerOpen={drawerOpen} />
                <Drawer handleDrawerClose={this.handleDrawerClose} drawerOpen={drawerOpen} handleDrawerOpen={this.handleDrawerOpen} />
                <div
                    tabIndex={-1}
                    className={clsx(classes?.content, {
                        [classes?.contentShift || '']: drawerOpen,
                    })}
                    onFocus={this.handleDrawerClose}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Layout);
import React from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MUIDrawer from '@material-ui/core/Drawer';
import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

import { routes } from 'constants/routes';
import { Collapse } from '@material-ui/core';

type ClassNames = 'root'
    | 'drawerOpen'
    | 'drawerClosed'
    | 'toolbar'
    | 'link'
    | 'nested';

interface Props {
    handleDrawerClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleDrawerOpen: (e: React.MouseEvent<HTMLButtonElement> | null) => void;
    drawerOpen: boolean;
    classes?: Record<ClassNames, string>;
};

interface LinkProps {
    buttonFunc?: (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => void;
}

interface State {
    componentOpened: string | null
}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {
        width: theme.spacing(7) + 1,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: theme.spacing(40),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClosed: {
        width: theme.spacing(7) + 1,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1)
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    }
});

export class Drawer extends React.Component<Props, State> {
    state: State = {
        componentOpened: null,
    }

    handleCollapseClick = (component: string) => (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        const { componentOpened } = this.state;

        this.setState({
            componentOpened: componentOpened === component
                ? null
                : component
        });
    }

    render = () => {
        const {
            handleDrawerClose,
            handleDrawerOpen,
            drawerOpen,
            classes,
        } = this.props;
        const { componentOpened } = this.state;

        return (
            <MUIDrawer
                variant="permanent"
                className={clsx(classes?.root, {
                    [classes?.drawerOpen || '']: drawerOpen,
                    [classes?.drawerClosed || '']: !drawerOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes?.drawerOpen || '']: drawerOpen,
                        [classes?.drawerClosed || '']: !drawerOpen,
                    })
                }}
            >
                <div className={classes?.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        <Icon>chevron_left_icon</Icon>
                    </IconButton>
                </div>
                <Divider />
                <List disablePadding>
                    {routes.map(item => {
                        const LinkComponent: React.FC<LinkProps> = ({ buttonFunc }) => (
                            <Link to={item.routeProps.path} className={classes?.link} key={item.component}>
                                <ListItem
                                    button
                                    onClick={!drawerOpen
                                        ? (e) => {
                                            if (typeof buttonFunc === 'function') {
                                                handleDrawerOpen(null);
                                                if (item.component !== componentOpened) {
                                                    buttonFunc(e);
                                                }
                                            }
                                        }
                                        : undefined}
                                >
                                    <ListItemIcon>
                                        <Icon>{item.linkIcon}</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={item.linkName} />
                                    {(buttonFunc && drawerOpen) && (
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    buttonFunc(e);
                                                }}
                                            >
                                                <Icon>{componentOpened === item.component
                                                    ? 'expand_less'
                                                    : 'expand_more'}
                                                </Icon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    )}
                                </ListItem>
                            </Link>
                        );

                        return item.subRoutes
                        ? (
                            <React.Fragment>
                                <LinkComponent buttonFunc={this.handleCollapseClick(item.component)} />
                                <Collapse in={drawerOpen && (componentOpened === item.component)} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {item.subRoutes.map(subItem => (
                                            <Link to={subItem.routeProps.path} className={classes?.link} key={subItem.component}>
                                                <ListItem button className={classes?.nested}>
                                                    <ListItemIcon>
                                                        <Icon>{subItem.linkIcon}</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText primary={subItem.linkName} />
                                                </ListItem>
                                            </Link>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        ) : <LinkComponent />
                    })}
                </List>
            </MUIDrawer>
        );
    }
}

export default withStyles(styles)(Drawer);
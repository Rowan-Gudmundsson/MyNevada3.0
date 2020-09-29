import React, { useState } from 'react';

import clsx from 'clsx';

import { Link as RRDLink, useLocation } from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { routes } from 'constants/routes';
import { Collapse } from '@material-ui/core';

type ClassNames = 'link' | 'nested';

interface Props {
    open: boolean;
    handleDrawer?: (open: boolean) => (e: any) => void;
    closeOnLink?: boolean;
};

interface LinkProps {
    path?: string | string[];
    text: string;
    icon?: string;
    onClick?: (e: any) => void;
    nested?: boolean
    selected?: boolean;
    handleDrawer?: (open: boolean) => (e: any) => void;
    closeOnLink?: boolean;
}

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Link: React.FC<LinkProps> = ({ path, text, onClick, icon, handleDrawer, closeOnLink = false, selected = false, nested = false }) => {
    const classes = useStyles();

    return (
        <RRDLink to={path} className={classes.link}>
            <ListItem
                button
                onClick={(e) => {
                    if (onClick) {
                        onClick(e);
                    }
                    if (closeOnLink && handleDrawer) {
                        handleDrawer(false)(e);
                    }
                }}
                className={clsx({ [classes.nested]: nested })}
                selected={selected}
            >
                {icon && (
                    <ListItemIcon>
                        <Icon>{icon}</Icon>
                    </ListItemIcon>
                )}
                <ListItemText primary={text} />
            </ListItem>
        </RRDLink>
    );
};

export const DrawerContent: React.FC<Props> = ({ handleDrawer, open, closeOnLink }) => {
    const [componentOpened, setComponentOpened] = useState<string | null>(null);

    const location = useLocation().pathname;

    const handleCollapseClick = (component: string) => (e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (handleDrawer) {
            handleDrawer(true)(null);
            if (!open && (component === componentOpened)) {
                return;
            }
        }
        setComponentOpened(componentOpened === component ? null : component);
    }

    return (
        <List disablePadding>
            {routes.map(({ routeProps: { path }, linkName, subRoutes, component, linkIcon }) => {
                const selected = !!location.match(new RegExp(`^${path}$`));

                return (
                    subRoutes
                        ? (
                            <React.Fragment key={component}>
                                <Link
                                    path={path}
                                    text={linkName}
                                    onClick={handleCollapseClick(component)}
                                    icon={linkIcon}
                                    selected={selected}
                                />
                                <Collapse in={open && (componentOpened === component)} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {subRoutes.map(({ routeProps: { path }, linkName, component: subComponent }) => {
                                            const selected = !!location.match(new RegExp(`^${path}$`));
                                            return (
                                                <Link
                                                    key={`${component}-${subComponent}`}
                                                    path={path}
                                                    text={linkName}
                                                    nested
                                                    selected={selected}
                                                    handleDrawer={handleDrawer}
                                                    closeOnLink={closeOnLink}
                                                />
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        ) : (
                            <Link
                                key={component}
                                path={path}
                                text={linkName}
                                icon={linkIcon}
                                selected={selected}
                                handleDrawer={handleDrawer}
                                closeOnLink={closeOnLink}
                            />
                        ));
            })}
        </List>
    );
}

export default DrawerContent;
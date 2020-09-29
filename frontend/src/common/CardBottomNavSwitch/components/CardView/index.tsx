import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';

type ClassNames = 'root' | 'heading' | 'iconButton' | 'divider' | 'content';

interface Props {
    content: {
        value: string;
        component: React.ComponentType;
    }[];
    actions: {
        label: string;
        value: string;
        icon: string;
    }[];
    sideContent?: React.ComponentType;
    sideContentHeading?: string;
}

interface State {
    minimized: Record<string, boolean>;
}

const defaultState: State = {
    minimized: {},
};

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {},
    heading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(),
    },
    iconButton: {
        marginRight: theme.spacing(),
    },
    divider: {
        height: theme.spacing(),
        width: theme.spacing(),
    },
    content: {
        padding: theme.spacing(),
    }
}));

const defaultComponent = () => null;

export const CardView: React.FC<Props> = ({ actions, content, sideContent, sideContentHeading }) => {
    const [state, setState] = useState<State>(defaultState);
    const classes = useStyles();

    const handleMinimize = (field: string) => (e: any) => {
        setState({
            minimized: {
                ...minimized,
                [field]: !minimized[field],
            }
        })
    }

    const {
        minimized,
    } = state;

    const hasSideContent = !!sideContent;
    const SideContent = sideContent || defaultComponent;

    return (
        <Grid container spacing={1}>
            <Grid item xs={hasSideContent ? 8 : 12}>
                <Grid container spacing={1}>
                    {actions.map(({ label, value }, ind) => {
                        const Content = content[ind].component;

                        return (
                            <Grid item xs={12} key={label}>
                                <Paper className={classes.heading} variant="outlined">
                                    <IconButton size="small" onClick={handleMinimize(value)} className={classes.iconButton}>
                                        <Icon fontSize="small">
                                            {minimized[value] ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                                        </Icon>
                                    </IconButton>
                                    <Typography variant="subtitle2">{label}</Typography>
                                </Paper>
                                <div className={classes.divider} />
                                <Collapse in={!minimized[value]}>
                                    <Paper variant="outlined" className={classes.content}>
                                        <Content />
                                    </Paper>
                                </Collapse>
                                {minimized[value] && ind !== actions.length - 1 && <Divider />}
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            {hasSideContent && (
                <Grid item xs={4}>
                    <Paper variant="outlined" className={classes.content}>
                        <Typography variant="subtitle2">{sideContentHeading}</Typography>
                        <SideContent />
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
}

export default CardView;
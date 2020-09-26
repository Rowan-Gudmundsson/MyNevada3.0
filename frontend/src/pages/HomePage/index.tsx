import React from 'react';

import clsx from 'clsx';

import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

import Table from 'common/Table';

type ClassNames = 'root'
    | 'card'
    | 'innerColumn'
    | 'heading' | 'headingIcon'
    | 'table'
    | 'academics';

interface Props {
    classes?: Record<ClassNames, string>;
}

interface State {
    collapsed: Record<string, boolean>;
}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {},
    card: {
        // height: '100%',
        padding: theme.spacing(),
        '&$academics': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        }
    },
    innerColumn: {
        height: '100%',
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    headingIcon: {
        marginRight: theme.spacing(),
    },
    table: {
        width: '50%',
        margin: 0,
    },
    academics: {},
});

export class HomePage extends React.Component<Props, State> {
    state: State = {
        collapsed: {},
    }

    handleCollapseCard = (card: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        const { collapsed } = this.state;

        this.setState({
            collapsed: {
                ...collapsed,
                [card]: !collapsed[card],
            }
        });
    }

    render = () => {
        const { collapsed } = this.state;
        const { classes } = this.props;

        return (
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes?.heading}>
                                <IconButton color="secondary" size="small" className={classes?.headingIcon} onClick={this.handleCollapseCard('academics')}>
                                    <Icon fontSize="small">
                                        {collapsed['academics'] ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                                    </Icon>
                                </IconButton>
                                <Typography variant="h5">Academics</Typography>
                            </Paper>
                            <Collapse in={!collapsed['academics']} timeout="auto" unmountOnExit>
                                <Paper className={clsx(classes?.card, classes?.academics)}>
                                    <Table
                                        component={({ children, ...rest }) => <Paper variant="outlined" {...rest}>{children}</Paper>}
                                        className={classes?.table}
                                        size="small"
                                        head={[
                                            { text: 'Class', props: {} },
                                            { text: 'Schedule', props: {} }
                                        ]}
                                        rows={[
                                            { name: 'BASQ 471', props: { }, cols: [ {text: 'BASQ 471-1001', props: {} }, { text: 'TuTh 12:00 - 13:10', props: {} }] },
                                            { name: 'CH 201', props: {}, cols: [{ text: 'CH 201-5504', props: {} }, { text: 'WEB WEB', props: {} }] },
                                        ]}
                                    />
                                </Paper>
                            </Collapse>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes?.heading}>
                                <IconButton color="secondary" size="small" className={classes?.headingIcon} onClick={this.handleCollapseCard('finances')}>
                                    <Icon fontSize="small">
                                        {collapsed['finances'] ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                                    </Icon>
                                </IconButton>
                                <Typography variant="h5">Finances</Typography>
                            </Paper>
                            <Collapse in={!collapsed['finances']} timeout="auto" unmountOnExit>
                                <Paper className={classes?.card}>
                                </Paper>
                            </Collapse>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes?.heading}>
                                <IconButton color="secondary" size="small" className={classes?.headingIcon} onClick={this.handleCollapseCard('personal')}>
                                    <Icon fontSize="small">
                                        {collapsed['personal'] ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                                    </Icon>
                                </IconButton>
                                <Typography variant="h5">Personal Information</Typography>
                            </Paper>
                            <Collapse in={!collapsed['personal']} timeout="auto" unmountOnExit>
                                <Paper className={classes?.card}>
                                </Paper>
                            </Collapse>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes?.heading}>
                                <IconButton color="secondary" size="small" className={classes?.headingIcon} onClick={this.handleCollapseCard('admissions')}>
                                    <Icon fontSize="small">
                                        {collapsed['admissions'] ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                                    </Icon>
                                </IconButton>
                                <Typography variant="h5">Admissions</Typography>
                            </Paper>
                            <Collapse in={!collapsed['admissions']} timeout="auto" unmountOnExit>
                                <Paper className={classes?.card}>
                                </Paper>
                            </Collapse>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} className={classes?.innerColumn}>
                    <Paper className={classes?.card}>
                        <Typography variant="h5">Tasks</Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(HomePage);
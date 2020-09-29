import React from 'react';

import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

import CardBottomNavSwitch from 'common/CardBottomNavSwitch';
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
        return (
            <CardBottomNavSwitch
                actions={[
                    { label: 'Academics', icon: 'school', value: 'academics' },
                    { label: 'Finances', icon: 'account_balance', value: 'finances' },
                    { label: 'Personal', icon: 'account_box', value: 'personal' },
                    { label: 'Admissions', icon: 'description', value: 'admissions' },
                ]}
                content={[
                    {
                        value: 'academics',
                        component: () => (
                            <Table
                                head={[
                                    { text: 'Class' },
                                    { text: 'Schedule' }
                                ]}
                                rows={[
                                    { name: 'BASQ 471-1001', cols: [{ text: 'BASQ 471-1001' }, { text: 'TuTh 12:00 - 13:10' }] },
                                    { name: 'CH 201-5504', cols: [{ text: 'CH 201-5504' }, { text: 'WEB WEB' }] }
                                ]}
                            />
                        ),
                    },
                    { value: 'finances', component: () => <div>Finances</div> },
                    { value: 'personal', component: () => <div>Personal Information</div> },
                    { value: 'admissions', component: () => <div>Admissions</div> },
                ]}
                sideContent={() => (
                    <div>
                        Tasks
                    </div>
                )}
                sideContentHeading="Tasks"
                sideContentIcon="rule"
            />
        );
    }
}

export default withStyles(styles)(HomePage);
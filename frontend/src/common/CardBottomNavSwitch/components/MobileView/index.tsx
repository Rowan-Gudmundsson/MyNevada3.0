import React, { useState } from 'react';

import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Theme } from '@material-ui/core/styles';

type ClassNames = 'root' | 'nav' | 'content' | 'tabs';

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
    sideContentIcon?: string;
}

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {
        width: '100%',
        height: '100%',
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        // height: '100%',
        padding: theme.spacing(),
    },
    tabs: {
        display: 'flex',
        justifyContent: 'center',
    }
}));


const defaultComponent = () => <div />;

interface TabPanelProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    value: number;
    index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
    >
        {value === index && (
            <Paper variant="outlined" className={other.className}>
                {children}
            </Paper>
        )}
    </div>
);

export const CardBottomNavSwitch: React.FC<Props> = ({ content, actions, sideContent, sideContentHeading, sideContentIcon }) => {
    const [selected, setSelected] = useState<number>(0);

    const handleChange = (e: any, newValue: number) => {
        setSelected(newValue);
    }

    const makeProps = (index: number) => ({
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    });

    const classes = useStyles();
    const SideContent = sideContent || defaultComponent;

    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.tabs}>
                <Tabs
                    value={selected}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="selection tabs"
                >
                    {actions.map(({ label, value, icon }, ind) => (
                        <Tab key={value} label={label} icon={<Icon>{icon}</Icon>} {...makeProps(ind)} />
                    ))}
                    {sideContentHeading && (
                        <Tab label={sideContentHeading} icon={<Icon>{sideContentIcon}</Icon>} {...makeProps(actions.length)} />
                    )}
                </Tabs>
            </Paper>
            {content.map(({ component }, ind) => {
                const Component = component || defaultComponent;

                return (
                    <TabPanel
                        key={ind}
                        className={classes.content}
                        value={selected}
                        index={ind}
                    >
                        <Component />
                    </TabPanel>
                );
            })}
            <TabPanel className={classes.content} value={selected} index={actions.length}>
                <SideContent />
            </TabPanel>
        </div>
    );
}

export default CardBottomNavSwitch;
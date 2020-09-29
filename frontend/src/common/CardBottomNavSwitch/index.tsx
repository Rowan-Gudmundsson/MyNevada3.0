import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import CardView from './components/CardView'
import MobileView from './components/MobileView';

type ClassNames = 'root';

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
}));

export const CardBottomNavSwitch: React.FC<Props> = (props) => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('xs'));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {mobile
                ? <MobileView {...props} />
                : <CardView {...props} />
            }
        </div>
    );
}

export default CardBottomNavSwitch;
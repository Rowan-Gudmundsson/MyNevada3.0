import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';

type ClassNames = 'root';

interface Props { }

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {},
}));

export const COMPONENT_NAME: React.FC<Props> = ({ }) => {
    const classes = useStyles();

    return <div className={classes.root}>COMPONENT_NAME</div>;
}

export default COMPONENT_NAME;
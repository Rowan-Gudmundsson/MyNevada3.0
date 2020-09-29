import React, { useState } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';

type ClassNames = 'root';

interface Props { }

interface State { }

const defaultState: State = {};

const useStyles = makeStyles<Theme, ClassNames>((theme) => ({
    root: {},
}));

export const COMPONENT_NAME: React.FC<Props> = ({ }) => {
    const [state, setState] = useState<State>(defaultState);
    const classes = useStyles();

    return <div className={classes.root}>COMPONENT_NAME</div>;
}

export default COMPONENT_NAME;
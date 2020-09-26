import React from 'react';

import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

type ClassNames = 'root';

interface Props {
    classes?: Record<ClassNames, string>;
}

interface State {

}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {},
});

export class Personal extends React.Component<Props, State> {
    state: State = {}

    render = () => {
        return 'Personal';
    }
}

export default withStyles(styles)(Personal);
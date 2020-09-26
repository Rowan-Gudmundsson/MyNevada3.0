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

export class Admissions extends React.Component<Props, State> {
    state: State = {}

    render = () => {
        return 'Admissions';
    }
}

export default withStyles(styles)(Admissions);
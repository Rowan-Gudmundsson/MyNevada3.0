import React from 'react';

import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

type ClassNames = 'root';

interface Props {

}

interface State {

}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {},
});

export class Grades extends React.Component<Props, State> {
    state: State = {}

    render = () => {
        return 'Grades';
    }
}

export default withStyles(styles)(Grades);
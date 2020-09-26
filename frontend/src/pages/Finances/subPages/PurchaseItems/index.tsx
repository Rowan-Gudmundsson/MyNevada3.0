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

export class PurchaseItems extends React.Component<Props, State> {
    state: State = {}

    render = () => {
        return 'PurchaseItems';
    }
}

export default withStyles(styles)(PurchaseItems);
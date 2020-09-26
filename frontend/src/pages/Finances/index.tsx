import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { withStyles, Theme } from '@material-ui/core/styles';
import { Styles } from '@material-ui/core/styles/withStyles';

import { finances } from 'constants/routes';

import HomePage from './HomePage';

type ClassNames = 'root';

interface Props {

}

interface State {

}

const styles: Styles<Theme, Props, ClassNames> = (theme) => ({
    root: {},
});

export class Finances extends React.Component<Props, State> {
    state: State = {}

    render = () => {
        return (
            <Switch>
                <Route
                    exact
                    path={finances.routeProps.path}
                    render={() => <HomePage />}
                />
                {finances.subRoutes?.map(({ component, routeProps, componentProps }) => {
                    const Component = React.lazy(() => import(`./subPages/${component}`));

                    return (
                        <Route
                            key={component}
                            render={() => <Component {...componentProps} />}
                            {...routeProps}
                        />
                    )
                })}
            </Switch>
        )
    }
}

export default withStyles(styles)(Finances);
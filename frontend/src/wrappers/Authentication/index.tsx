import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { State as ReduxState } from 'store/reducers';

import CssBaseline from '@material-ui/core/CssBaseline';

import { State as UserState } from 'store/reducers/user';
import { authenticateUser } from 'store/actions/user';

import LoginPage from './components/LoginPage';

interface Props {
    user: UserState;
    actions: {
        authenticateUser: (username: string, password: string) => void;
    }
    children: React.ReactNode;
};

export class Authentication extends React.Component<Props> {
    render = () => {
        const { children, actions, user } = this.props;

        if (user.isFetching) return <div>Loading...</div>;
        
        return (
            <div>
                <CssBaseline />
                {user.isVerified
                    ? children
                    : <LoginPage authenticateUser={actions.authenticateUser} />}
            </div>
        );
    };
}

const mapStateToProps = (state: ReduxState) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        authenticateUser,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
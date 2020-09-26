import { Dispatch } from 'redux';

import { Action } from '../reducers/user';

const requestToken = (): Action => ({
    type: 'REQUEST_TOKEN',
});

const verifyToken = (): Action => ({
    type: 'VERIFY_TOKEN',
});

const tokenSuccess = (data: object): Action => ({
    type: 'TOKEN_SUCCESS',
    data,
});

const tokenFailure = (error: string): Action => ({
    type: 'TOKEN_FAILURE',
    error,
});

const logoutUser = (): Action => ({
    type: 'LOGOUT_USER',
});

export const authenticateUser = (username: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(requestToken());

    setTimeout(() => {
        dispatch(tokenSuccess({}));
    }, 1000);
}

export const userLogout = () => (dispatch: Dispatch) => {
    dispatch(logoutUser());
}
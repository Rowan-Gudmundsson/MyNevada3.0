import { combineReducers } from 'redux';

import user, { State as UserState } from './user';

export interface State {
    user: UserState,
}

export default combineReducers({ user });
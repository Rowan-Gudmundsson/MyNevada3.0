export interface State {
    isFetching: boolean;
    isVerified: boolean;
    error: string | null;
    data: object | null;
}

export interface Action {
    type: 'REQUEST_TOKEN'
        | 'VERIFY_TOKEN'
        | 'TOKEN_SUCCESS'
        | 'TOKEN_FAILURE'
        | 'LOGOUT_USER';
    data?: object;
    error?: string;
}

const INITIAL_STATE: State = {
    isFetching: false,
    isVerified: true,
    error: null,
    data: null,
};

export default (state = INITIAL_STATE, action?: Action): State => {
    switch (action?.type) {
        case 'REQUEST_TOKEN': {
            return {
                ...state,
                isFetching: true,
                isVerified: false,
                error: null,
                data: null
            }
        }
        case 'VERIFY_TOKEN': {
            return {
                ...state,
                isFetching: true,
                isVerified: false,
                error: null,
                data: null
            }
        }
        case 'TOKEN_SUCCESS': {
            return {
                ...state,
                isFetching: false,
                isVerified: true,
                error: null,
                data: action?.data || null,
            }
        }
        case 'TOKEN_FAILURE': {
            return {
                ...state,
                isFetching: false,
                isVerified: false,
                error: action?.error || null,
                data: null,
            }
        }
        case 'LOGOUT_USER': {
            return {
                ...state,
                ...INITIAL_STATE,
            }
        }
        default: {
            return state;
        }
    }
}
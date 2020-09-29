import * as React from 'react';

import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

export const theme = unstable_createMuiStrictModeTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#3f5d94',
            main: '#003466',
            dark: '#000d3b'
        },
        secondary: {
            light: '#d8dbde',
            main: '#a7a9ac',
            dark: '#787a7d',
        },
    },
});

export default React.createContext(theme);
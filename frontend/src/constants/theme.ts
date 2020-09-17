import * as React from 'react';

import { colors } from './colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        ...colors,
    },
})

export default React.createContext(theme);
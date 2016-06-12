import React from 'react';
import AppBar from 'material-ui/AppBar';

import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme({
  appBar: {
    accent1Color: deepOrange500,
  },
});

export default function(props){
    return (
        <div>
        <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar title="Prioritly" />
        </MuiThemeProvider>
        </div>
    )
}

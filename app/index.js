import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(routes, document.getElementById('app'));

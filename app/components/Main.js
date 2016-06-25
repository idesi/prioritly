import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AddTodo from './AddTodo';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme({
});

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <App> {this.props.children} </App>
                </MuiThemeProvider>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <AddTodo />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

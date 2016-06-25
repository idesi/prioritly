import React from 'react';
import AppBar from 'material-ui/AppBar';


const styles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '20px 24px',
    'boxSizing': 'border-box',
    'textAlign': 'center',
    'backgroundColor': 'rgb(33, 33, 33)',
    'width': '100%',
    'color': 'rgba(255, 255, 255, 0.541176)',
    'fontFamily': 'Robot, sans-serif'
}

export default function(props){
    return (
        <div>
            <footer style={styles}>Prioritly</footer>
        </div>
    )
}

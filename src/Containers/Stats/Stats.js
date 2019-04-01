import React, { Component } from 'react';

import classes from './Stats.module.css';

class Stats extends Component {
    render () {
        return (
            <div className={classes.Stats}>
                {this.props.name}
            </div>
        )
    }
}

export default Stats;
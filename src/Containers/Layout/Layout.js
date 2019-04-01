import React, { Component } from 'react';

import Aux from '../../hoc/Auxialiary';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
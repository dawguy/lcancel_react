import React from 'react';

class Test extends React.Component {
    render() {
        return(
            <div>
                {this.props.label}
            </div>
        )
    }
}

module.exports = Test;
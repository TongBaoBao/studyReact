import React, { Component, PropTypes } from 'react';

export default class Add extends Component {
    render() {
        const { text } = this.props;
        return (
            <li>
                     {text}
            </li>
    );
    }
}

Add.propTypes = {
    text: PropTypes.string.isRequired
};

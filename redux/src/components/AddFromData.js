import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class AddFromData extends Component {
    render() {
        return (
            <div>
                <button onClick={ e => this.handleClick(e) }>
                    AddFromData
                </button>
            </div>
        );
    }

    handleClick(e) {
        this.props.onAddFromDataClick();
    }
}

AddFromData.propTypes = {
    onAddFromDataClick: PropTypes.func.isRequired
};

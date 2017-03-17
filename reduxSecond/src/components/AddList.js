import React, { Component, PropTypes } from 'react';
import Add from './Add';

export default class AddList extends Component {
    render() {
        return (
            <ul>
            {
                this.props.adds.map((add,index) =>
                <Add
                    {...add}
                    key={index}
                />
                )
             }
            </ul>
        );
    }
}

AddList.propTypes = {
    adds: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

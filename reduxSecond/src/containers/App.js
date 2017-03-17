'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    add
} from '../actions';

import AddList from '../components/AddList';
import Input from '../components/Input';

class App extends Component{
    render () {
        const { dispatch, visibleAdds } = this.props;
        return (
            <div>
                <Input
                    onAddClick={ text =>
                        dispatch(add(text))
                  }
                />
                <AddList
                    adds={visibleAdds}
                />
            </div>
                    )

    }
}

App.propTypes = {
    visibleAdds: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }))
};

// 这里的 state 是 Connect 的组件的
function select(state) {
    return {
        visibleAdds: state.adds
    };
}

export default connect(select)(App);

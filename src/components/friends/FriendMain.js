import React, { Component } from 'react';
import FriendSearch from './FriendSearch';
import FriendList from './FriendList';

class FriendMain extends Component {

    render() {
        return (
            <React.Fragment>
                <FriendList {...this.props} />
            </React.Fragment>
        )
    }
}

export default FriendMain;
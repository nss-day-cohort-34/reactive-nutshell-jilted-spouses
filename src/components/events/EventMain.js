import React, { Component } from 'react';
import EventList from "./EventList"

class EventMain extends Component {

    render() {
        return (
            <React.Fragment>
                <EventList {...this.props}/>
            </React.Fragment>
        )
    }
}

export default EventMain
import React from 'react';
import {
    ListGroup, ListGroupItem
} from 'react-bootstrap';

let style = {
    list: {
        marginBottom: "0px"
    },
    listItem: {
        fontSize: "15pt"
    }
}
class TimeList extends React.Component {
    constructor(props) {
        super(props);
        let startTime = this.props.startTime || 0;
        let endTime = this.props.endTime || 23;
        this.times = [];
        for (let i = startTime; i <= endTime; i++) {
            this.times.push(<TimeListItem key={i} onClick={this.onClick} time={i} />);
        }
    }
    onClick = (time) => {
        if (this.props.onClick) {
            this.props.onClick(time);
        }
    }
    render() {
        return (
            <ListGroup {...this.props} style={style.list}>{this.times}</ListGroup>
        );
    }
}

class TimeListItem extends React.Component {
    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.time);
        }
    }
    render() {
        let val = (this.props.time % 12) || 12;
        let suffix = this.props.time >= 12 ? "pm" : "am";
        return (
            <ListGroupItem style={style.listItem} onClick={this.onClick}>{val + suffix}</ListGroupItem>
        )
    }
}

export default TimeList;
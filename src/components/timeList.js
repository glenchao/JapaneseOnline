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
    onClick = (time) => {
        if (this.props.onClick) {
            this.props.onClick(time);
        }
    }
    render() {
        let startTime = this.props.startTime || 0;
        let endTime = this.props.endTime || 23;
        let lessons = this.props.lessons || [];
        lessons = lessons.map((lesson) => {
            return lesson.time;
        });
        this.times = [];
        for (let i = startTime; i <= endTime; i++) {
            let isSelected = lessons.indexOf(i) !== -1;
            this.times.push(<TimeListItem key={i} isSelected={isSelected} onClick={this.onClick} time={i} />);
        }
        return (
            <ListGroup style={style.list}>{this.times}</ListGroup>
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
        let bgColor = this.props.isSelected ? "success" : null;
        return (
            <ListGroupItem style={style.listItem} bsStyle={bgColor} onClick={this.onClick}>{val + suffix}</ListGroupItem>
        )
    }
}

export default TimeList;
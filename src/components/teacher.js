import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

let style = {
    margin: "0 auto",
}

class Teacher extends Component {
    render() {
        // this.props.teacherId;
        return (
            <div>
                <Image style={style} src={this.props.img} responsive rounded />
                <br/>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Teacher;
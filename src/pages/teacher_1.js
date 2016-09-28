import React, { Component } from 'react';
import LessonStore from '../stores/lessonStore';

class Teacher_1 extends Component {
    constructor = () => {
        this.allLessons = [];
        this.allLessons[0] = LessonStore.get("Pq2kYapP4hUg2bym9IZLMotVpKj2");
        this.allLessons[1] = LessonStore.get("ximxOPFDsWZE59ijj8gMApOjt7d2");
    }
    render() {
        // this.props.teacherId;
        return (
            <div>
                Teacher One
            </div>
        );
    }
}

export default Teacher_1;
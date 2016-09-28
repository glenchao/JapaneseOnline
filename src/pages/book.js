import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';
import LessonStore from '../stores/lessonStore';
import Teacher from '../components/teacher.js';

// import teacher_1 from '../images/teacher1.jpg';
// import teacher_2 from '../images/teacher2.jpg';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allLessons: [],
        };
        console.log("Book.js Test");
        LessonStore.get("Pq2kYapP4hUg2bym9IZLMotVpKj2").then((lessons) => {
            this.setState({ allLessons: lessons.date })
            console.log("Teacher 0: " + this.allLessons);
        });
        // LessonStore.get("ximxOPFDsWZE59ijj8gMApOjt7d2").then((lessons) => {
        //     this.state.allLessons[1] = lessons;
        //     this.setState(this.state);
        //     console.log("Teacher 1: " + this.allLessons[1]);
        // });
        this.lol = 0;
    }
    render() {
        let x = this.lol;
        return (
            <div>
                <Pager>
                    <Pager.Item previous href="#">&larr; Prev Page</Pager.Item>
                    <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
                </Pager>
                <Teacher content={this.state.allLessons} />
            </div>
        );
    }
}

export default Book;
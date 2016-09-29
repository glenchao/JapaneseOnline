import React, { Component } from 'react';
import { Pager, PageHeader,
    Grid, Row, Col } from 'react-bootstrap';
import LessonStore from '../stores/lessonStore';
import Teacher from '../components/teacher.js';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import moment from 'moment';
import TimeList from '../components/timeList';
import ScreenUtil from '../utilities/screen';

// import teacher_1 from '../images/teacher1.jpg';
// import teacher_2 from '../images/teacher2.jpg';
let style = {
    collapse: {
        padding: "0px",
        margin: "-20px 0px 0px 0px"
    },
    center: {
        margin: "0 auto",
        textAlign: "center"
    }
}

class Book extends Component {
    constructor(props) {
        super(props);
        this.selectedDate = moment();
        this.state = {
            screenSize: ScreenUtil.getScreenSize(),
            lessons: [],
            teacher: 'Pq2kYapP4hUg2bym9IZLMotVpKj2',
            teacherName: 'Teacher 1',
        };
        window.onresize = () => {
            let state = Object.assign({}, this.state, { screenSize: ScreenUtil.getScreenSize() });
            this.setState(state);
        };
        this.allLessons = [];
        this.prevNext = 0;
        LessonStore.get(this.state.teacher).then((lessons) => {
            this.allLessons = lessons;
            this.setState({ lessons: this.getLessonsForDate(this.selectedDate) })
        });
    }
    componentDidMount() {
        // super hack to fix InfiniteCalendar scroll problem
        // timer hack to wait until thread is not busy to check scroll position
        setTimeout(() => {
            let selected = document.getElementsByClassName("Cal__Day__selected")[0];
            // check if we found any selected elements
            // and if the browser is new enough to support scrollIntoViewIfNeeded
            if (selected && selected.scrollIntoViewIfNeeded) {
                selected.scrollIntoViewIfNeeded()
            }
        }, 1);
    }
    getLessonsForDate = (date) => {
        return this.allLessons.filter((lesson) => {
            return lesson.date === date.format("YYYY MM DD");
        });
    }
    onDateClick = (date) => {
        this.selectedDate = date;
        this.setState({
            screenSize: ScreenUtil.getScreenSize(),
            lessons: this.getLessonsForDate(this.selectedDate)
        });
    }
    prevPageClick = () => {
        this.setState({ teacher: "Pq2kYapP4hUg2bym9IZLMotVpKj2" })
        this.setState({ teacherName: "Teacher  1" })
        LessonStore.get("Pq2kYapP4hUg2bym9IZLMotVpKj2").then((lessons) => {
            this.allLessons = lessons;
            console.log("Teacher 1: " + this.allLessons);
            this.setState({ lessons: this.getLessonsForDate(this.selectedDate) })
        });
    }
    nextPageClick = () => {
        this.setState({ teacher: "ximxOPFDsWZE59ijj8gMApOjt7d2" })
        this.setState({ teacherName: "Teacher  2" })
        LessonStore.get("ximxOPFDsWZE59ijj8gMApOjt7d2").then((lessons) => {
            this.allLessons = lessons;
            console.log("Teacher 2: " + this.allLessons);
            this.setState({ lessons: this.getLessonsForDate(this.selectedDate) })
        });
    }
    onTimeClick = (time, isSelected) => {
        isSelected === true? 
            alert("You've booked: " + this.state.teacherName + " at " + time + " o'clock") : 
            alert("The teacher is not available for this time.");
    }
    render() {
        // some stupid css calculations....
        let size = this.state.screenSize;
        let calendarHeight = size === "xs" ? 150 : 250;
        // currently selected date header height = 98px
        // week header height = 49px
        let calendarTotalHeight = calendarHeight + 49 + 98;
        let navbarHeight = 52;
        let listStyle = {
            height: size === "xs" ? ScreenUtil.height() - navbarHeight - calendarTotalHeight : calendarTotalHeight,
            overflow: "auto",
        };
        let prev = -1;
        return (
            <div>
                <Grid style={size === "xs" ? style.collapse : {}}>
                    <Row>
                        <Col xs={12}>
                            <PageHeader style={style.center}>
                                <small> <Teacher content={this.state.teacherName} /> </small>
                            </PageHeader>
                            <Pager>
                                <Pager.Item previous onClick={this.prevPageClick}>&larr; Prev Page</Pager.Item>
                                <Pager.Item next onClick={this.nextPageClick}>Next Page &rarr;</Pager.Item>
                            </Pager>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <InfiniteCalendar
                                autoFocus={true}
                                todayHelperRowOffset={0}
                                showHeader={true}
                                width="100%"
                                height={calendarHeight}
                                minDate={moment()}
                                keyboardSupport={true}
                                onSelect={this.onDateClick} />
                        </Col>
                        <Col xs={12} sm={6} style={listStyle}>
                            <TimeList startTime={1} endTime={23} lessons={this.state.lessons} onClick={this.onTimeClick} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Book;
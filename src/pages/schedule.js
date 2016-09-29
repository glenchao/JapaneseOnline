import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import {
    PageHeader,
    Grid, Row, Col
} from 'react-bootstrap';
import moment from 'moment';
import TimeList from '../components/timeList';
import ScreenUtil from '../utilities/screen';
import UserStore from '../stores/userStore';
import LessonStore from '../stores/lessonStore';
import Lesson from '../models/lesson';

let style = {
    collapse: {
        padding: "0px",
        margin: "-20px 0px 0px 0px"
    }
}

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.selectedDate = moment();
        this.state = {
            screenSize: ScreenUtil.getScreenSize(),
            lessons: [],
        };
        window.onresize = () => {
            let state = Object.assign({}, this.state, { screenSize: ScreenUtil.getScreenSize() });
            this.setState(state);
        };
        this.allLessons = [];
        LessonStore.get().then((lessons) => {
            this.allLessons = lessons;
            console.log(this.allLessons);
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
        return (
            <Grid style={size === "xs" ? style.collapse : {}}>
            <Row><Col xs={12} xsHidden>
                <PageHeader>Schedule</PageHeader>
            </Col></Row>
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
        );
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
    onTimeClick = (time, isSelected) => {
        let exists = false;
        let date = this.selectedDate.format("YYYY MM DD");
        let tempLesson = new Lesson({time: time, date: date});
        let lessons = this.allLessons;
        for (var i=0; i<lessons.length; i++) {
            if (lessons[i].time === time) {
                LessonStore.remove(lessons[i].id); //remove Firebase
                this.allLessons.splice(i, 1); //remove temp memory
                console.log("this.allLessons: " + this.allLessons);
                exists = true;
                break;
            }
        }
        if (!exists) {
            // save to database
            LessonStore.add(tempLesson); //save to lessons database
            UserStore.updateSchedule(tempLesson); //save to user database
            // this.state.lessons.push(tempLesson);
            this.allLessons.push(tempLesson);
            // this.setState(this.state);
            console.log("state:" + this.state.lessons);
        }
        this.setState({ lessons: this.getLessonsForDate(this.selectedDate) })
    }
}

export default Schedule;

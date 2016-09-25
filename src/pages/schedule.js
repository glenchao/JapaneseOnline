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

let style = {
    collapse: {
        padding: "0px",
        margin: "-20px 0px 0px 0px"
    }
}

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenSize: ScreenUtil.getScreenSize(),
            selecteDate: moment()
        };
        window.onresize = () => {
            let state = Object.assign({}, this.state, { screenSize: ScreenUtil.getScreenSize() });
            this.setState(state);
        };
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
        console.log("render");
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
                        selectedDate={this.state.selecteDate}
                        minDate={moment()}
                        keyboardSupport={true}
                        onSelect={this.onDateClick} />
                </Col>
                <Col xs={12} sm={6} style={listStyle}>
                    <TimeList onClick={this.onTimeClick} />
                </Col>
            </Row>
            </Grid>
        );
    }
    onDateClick = (date) => {
        this.setState({
            screenSize: ScreenUtil.getScreenSize(),
            selectedDate: date
        });
    }
    onTimeClick = (time) => {
        console.log(time);
        // save to database
    }
}

export default Schedule;

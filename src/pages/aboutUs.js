import React, { Component } from 'react';
import videoclassOne from '../images/videoclass1.jpg';
import videoclassTwo from '../images/videoclass2.jpg';
import { 
    Grid, Row, Col,
    Image,
} from 'react-bootstrap';

let style = {
    heading: {
        textAlign: "center",
        divider: {
            maxWidth: "150px",
            borderColor: "#ee4b28",
            borderWidth: "3px",
        },
    },
    paragraph: {
        fontSize: "1.25em",
        color: "#777",
        padding: "0 5%",
    },
}

class AboutUs extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                        <div style={style.heading}>
                            <h1>
                                How Does Online Lessons Work?
                            </h1>
                            <hr style={style.heading.divider}></hr>
                            <p style={style.paragraph}>With cloud based video conferencing technology, we can deliver lessons right on your mobile devices. No software download is necessary.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                        <div style={style.heading}>
                            <Image src={videoclassOne} responsive />
                            <h3>Small Class Size</h3>
                            <p style={style.paragraph}>With a class size of 1~3, you get to participate actively in the class while having the benefits of learning together</p>
                            <hr style={style.heading.divider}></hr>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                        <div style={style.heading}>
                            <Image src={videoclassTwo} responsive />
                            <h3>Private Lessons</h3>
                            <p style={style.paragraph}>We also provide 1-on-1 private lessons if you prefer more customized learning experience</p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AboutUs;
import React, { Component } from 'react';
import { Link } from 'react-router';
import backgroundImageOne from '../images/kyoto_1.jpg';
import backgroundImageTwo from '../images/kyoto_2.jpg';
import teachingBackground from '../images/teaching.png';
import teacherOne from '../images/teacher1.jpg';
import teacherTwo from '../images/teacher2.jpg';
import { 
    Grid, Row, Col,
    Button, Image,
    Carousel, Jumbotron, Glyphicon
} from 'react-bootstrap';

let style = {
    sectionOne: {
        opacity: 0.5,
        fontColor: {
            opacity: 0.8,
            color: "black",
        },
    },
    button: {
        backgroundColor: "#ee4b28",
        border: "none",
        margin: "0 auto",
    },
    sectionTwo: {
        color: "black",
        textAlign: "center",
        bg: {
            backgroundImage: 'url(' + teachingBackground + ')',
            backgroundSize: "cover",
        },
    },
    sectionThree: {
        textAlign: "center",
        glyph: {
            fontSize: "48px",
            color: "#ee4b28",
        },
    },
    sectionFour: {
        textAlign: "center",
        margin: "-15 auto -5",
    },
}

class Home extends Component {
    imagePop = () => {
        
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} xsOffset={0} sm={10} smOffset={1} md={10} mdOffset={1} lg={8} lgOffset={2}>
                        <Carousel>
                            <Carousel.Item>
                                <img style={style.sectionOne} width={900} height={500} alt="900x500" src={backgroundImageOne}/>
                                <Carousel.Caption>
                                    <h2>Don't Just Learn Japanese</h2>
                                    <p>Learn Japanese Culture</p>
                                    <p>Using the Japanese Way</p>
                                    <Link to="/aboutUs"><p><Button style={style.button}>Learn more</Button></p></Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={style.sectionOne} width={900} height={500} alt="900x500" src={backgroundImageTwo}/>
                                <Carousel.Caption>
                                    <h2 style={style.sectionOne.fontColor}>Don't Just Learn Japanese</h2>
                                    <p style={style.sectionOne.fontColor}>Learn Japanese Culture</p>
                                    <p style={style.sectionOne.fontColor}>Using the Japanese Way</p>
                                    <Link to="/aboutUs"><p><Button style={style.button}>Learn more</Button></p></Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row id="services">
                    <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={8} mdOffset={2}>
                        <div style={style.sectionThree}>
                            <h2>What We Deliver</h2><br/>
                            <Glyphicon style={style.sectionThree.glyph} glyph="user" /><h4>1-On-1 Learning</h4><br/>
                            <Glyphicon style={style.sectionThree.glyph} glyph="education" /><h4>Fully Immersive Japanese Environment</h4><br/>
                            <Glyphicon style={style.sectionThree.glyph} glyph="phone" /><h4>Mobile, Anytime, Anywhere</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                        <Jumbotron style={style.sectionTwo.bg}>
                            <div style={style.sectionTwo}>
                                <h2>Online Japanese Learning</h2>
                                <p>Anytime, Anywhere, On Your Phone</p>
                                <Link to="/aboutUs"><p><Button style={style.button}>What's This?</Button></p></Link>
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row id="teachers">
                    <Col xs={12} xsOffset={0} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
                        <div style={style.sectionFour}>
                            <Image src={teacherOne} onSelect={this.imagePop} responsive/>
                            <Image src={teacherTwo} responsive/>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;

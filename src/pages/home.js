import React, { Component } from 'react';
import HomeHeader from '../components/homeHeader';
import backgroundImageOne from '../images/kyoto_1.jpg';
import backgroundImageTwo from '../images/kyoto_2.jpg';
import { 
    Grid, Row,
    Button,
    Carousel
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
    },
}

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <HomeHeader />
                </Row>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img style={style.sectionOne} width={900} height={500} alt="900x500" src={backgroundImageOne}/>
                            <Carousel.Caption>
                                <h3>Don't Just Learn Japanese</h3>
                                <p>Learn Japanese Culture</p>
                                <p>Using the Japanese Way</p>
                                <p><Button style={style.button}>Learn more</Button></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={style.sectionOne} width={900} height={500} alt="900x500" src={backgroundImageTwo}/>
                            <Carousel.Caption>
                                <h3 style={style.sectionOne.fontColor}>Don't Just Learn Japanese</h3>
                                <p style={style.sectionOne.fontColor}>Learn Japanese Culture</p>
                                <p style={style.sectionOne.fontColor}>Using the Japanese Way</p>
                                <p><Button style={style.button}>Learn more</Button></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Grid>
        );
    }
}

export default Home;

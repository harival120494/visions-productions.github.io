import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Fade} from 'react-reveal';
import { ArrowRight } from 'react-feather';

const classes = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  }),
);

export default class Portfolio extends React.Component{
    render(){
        return (
            <Container fixed className="portfolio-wrapper"> 
                <Fade top><div className="portfolio-title">Portfolio</div></Fade>
                <Fade bottom>
                    <div className="green-ractangle">
                        <div className="portfolio-left-title">Portfolio</div>
                        <div className="best-our-works">our best works !</div>
                        <div className="bar-left-green"></div>
                        <div className="desc-left1">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="desc-left1">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </div>
                        <div className="viewmore-left">
                            <span>view more . .</span>
                            <span ><ArrowRight size={20} style={{marginTop:15}} /></span>
                        </div>
                        <div className="rect-in-green"></div>
                    </div>
                    <div className="foto1"></div>
                    <div className="foto2"></div>
                    <div className="small-rect1"></div>
                    <div className="foto3"></div>
                    <div className="foto4"></div>
                    <div className="foto5"></div>
                    <div className="foto6"></div>
                    <div className="small-rect2"></div>
                    <div className="small-rect3"></div>
                    <div className="small-rect4"></div>
                    <div className="foto7"></div>
                    
                </Fade>
            </Container>
        )
    }
}

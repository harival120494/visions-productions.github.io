import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Fade} from 'react-reveal';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const classes = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  }),
);


const About = () => {
    return (
        <div display='flex' flex='1' className="about-wrapper">
            <Container fixed>
                <Fade top><div className="about-us-title">About Us</div></Fade>
                <Fade bottom>
                    <Grid container className={classes.root} direction="row" spacing={9} justify="center">
                        <Grid item  sm={1}>
                            <ArrowLeftCircle className="about-us-arrow" style={{marginTop:180}}/>
                        </Grid>
                        {[0, 1, 2].map((value) => (
                            <Grid key={value} item  sm={3}>
                                <div className="personel-thumb">
                                    <img src={'/human.png'} width={200}/> 
                                </div>
                                <div className="personel-title">
                                    Harival Tivani
                                </div>
                                <div className="personel-desc">
                                    Reference site about Lorem Ipsum, giving information on its origins
                                </div>
                            </Grid>
                        ))}
                        <Grid item  sm={1}>
                            <ArrowRightCircle className="about-us-arrow" style={{marginTop:180}}/>
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </div>
    )
}

export default About;
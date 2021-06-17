import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Fade} from 'react-reveal';

export default class OurServices extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isOn: true
        };
        // 
    }

    render(){
       
        return (
            <>
                <Container fixed className="services-wrapper"> 
                    <Fade top><div className="services-title">Our Services</div></Fade>
                    <Fade bottom>
                        <Grid container className={classes.root} direction="row" spacing={9} justify="center">
                            <Grid key={1} item  sm={4}>
                                <div className="service-image"></div>
                            </Grid>
                            <Grid key={2} item  sm={8}>
                                <div className="title-services">Wedding Photography, Video Documentasion, Yearly Book School, Etc.</div>
                                <div className="our-services-desc">
                                    <p>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                    </p>
                                    <p>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                    </p>
                                </div>
                                <Grid container className={classes.root} direction="row" spacing={9} justify="center">
                                    <Grid key={3} item  sm={6}>
                                        <img src={'/image/4.jpg'} height={250}/> 
                                    </Grid>
                                    <Grid key={3} item  sm={6}>
                                        <img src={'/image/4.jpg'} height={250}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                </Container>
            </>
        )
    }
}


const classes = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  }),
);

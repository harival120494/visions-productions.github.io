import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Fade} from 'react-reveal';

export default class Footer extends React.Component{
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
                <div className="footer-wrapper" display='flex' flex='1'>
                    <Container fixed> 
                        <Fade bottom>
                            <Grid container className={classes.root} direction="row" spacing={9} justify="center">
                                <Grid key={1} item  sm={6}>
                                    <img src={'/logo.png'} className="logo"/> 
                                </Grid>
                                <Grid key={2} item  sm={6}>
                                    <div className="footer-desc">Copyright © 2021 Harival Tivani - Allright reserved </div>
                                </Grid>
                            </Grid>
                        </Fade>
                    </Container>
                </div>
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

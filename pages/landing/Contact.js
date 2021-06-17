import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Fade} from 'react-reveal';
import { Map, Marker } from "pigeon-maps"

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isOn: true,
            viewPort:{
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            }
        };
        // 
    }

    componentDidMount() {
        window.handleGoogleClientLoad = function() {
        
        }
        console.log('window.innerHeight',  window.innerHeight);
    }


    render(){
       
        return (
            <>
                <Container fixed className="contact-wrapper"> 
                    <Fade top><div className="contact-title">Contact</div></Fade>
                    <Fade bottom>
                        <Grid container className={classes.root} direction="row" spacing={9} justify="center">
                            <Grid key={1} item  sm={3}>
                                <div className="title_item_contact">Phone/ WA</div>
                                <div className="item_contact">+62 823 8746 2649</div>
                                <div className="item_contact">+62 823 8746 2649</div>
                            </Grid>
                            <Grid key={2} item  sm={3}>
                                <div className="title_item_contact">E-mail</div>
                                <div className="item_contact">hati.sysdev@gmail.com</div>
                            </Grid>
                            <Grid key={3} item  sm={3}>
                                <div className="title_item_contact">Address</div>
                                <div className="item_contact">
                                    Jl. Raya Rimbo Tarok Kuranji, Padang Sumatera Barat
                                </div>
                            </Grid>
                            <Grid key={4} item  sm={3}>
                                <div className="title_item_contact">Working Hours</div>
                                <div className="item_contact">Daily 08:00 - 22:00</div>
                            </Grid>
                        </Grid>
                    </Fade>
                </Container>
                <div className="map-wrapper" display='flex' flex='1'>
                    <Map height={400} defaultCenter={[-0.897153, 100.415902]} defaultZoom={13}>
                        <Marker width={50} anchor={[-0.897153, 100.415902]} />
                    </Map>
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

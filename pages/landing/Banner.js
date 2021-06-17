import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import { Facebook, Instagram, MessageCircle } from 'react-feather';
import {Fade, Slide} from 'react-reveal';
export default class Banner extends React.Component{
    render(){
        const DrawerClick = () => {
            alert('test');
        }
        return(
            <div display='flex' flex='1' height='100%'  className="banner">    
                <AppBar position="static" className="MuiAppBar-colorPrimary">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={DrawerClick}>
                        <Menu />
                        </IconButton>
                        <a href="#">
                            <Typography className="lang-id">EN</Typography>
                        </a>
                        <a href="#"><Typography className="lang-id">ID</Typography></a>
                        <section className="rightToolbar">
                            <IconButton color="inherit" aria-label="More Options">
                                <img src={'/logo.png'} className="logo"/> 
                            </IconButton>
                        </section>
                    </Toolbar>
                </AppBar>
                <Box display='flex' flex='1' justifyContent='space-around'>
                    <Slide top>
                        <div className="vector1"></div>
                    </Slide>
                    <Slide bottom>
                        <div className="vector2"></div>
                    </Slide>
                    <Facebook className="facebook" color='#ffffff'/>
                    <Instagram className="instagram" color='#ffffff'/>
                    <MessageCircle className="messagecircle" color='#ffffff'/>
                    <Fade top>
                        <label className="visions-productions-title">V<small style={{fontSize:48}}>isions</small> P<small style={{fontSize:48}}>roductions</small></label>
                    </Fade >
                    <Fade bottom>
                        <p className="desc-banner-title">
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                        </p>
                            <div className="desc-right-border"></div>
                        <div className="banner-button" style={{border:"2px solid #E2AE56",color:"#E2AE56"}}>Let's Contact</div>
                    </Fade>
                </Box>
            </div>
        )
    }
}
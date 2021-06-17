import React from "react";
import {X} from 'react-feather';

export default class Menu extends React.Component{
    render(){
        return(
            <div display='flex' flex='1' height='100%' className="menu-bg">
                <X className="close-menu"/>
                <div className="menu-logo"></div>
            </div>
        )
    }
}
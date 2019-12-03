import React from 'react';
import { NavLink } from "react-router-dom";
import './head.scss'

class Head extends React.Component {
    render(){
        return (
            <div className="head">
                head module
                <NavLink to="/">首页</NavLink>
                <NavLink to="/list">列表</NavLink>
            </div>
        )
    }
}

export default Head;
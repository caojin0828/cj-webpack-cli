import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import routers from './path'
import Index from './../page/index'

// {
//     routers.map((item,index) => (
//         item.exact ? 
//         <Route key={index} exact path={item.path} render={item.component}/>
//         :
//         <Route key={index} path={item.path} render={item.component}/>
//     ))
// }

class BaseRouter extends React.Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                {
                    routers.map((item,index) => (
                        item.exact ? 
                        <Route key={index} exact path={item.path} component={item.component}/>
                        :
                        <Route key={index} path={item.path} component={item.component}/>
                    ))
                }
                </Switch>
            </HashRouter>
        )
    }
}

export default BaseRouter
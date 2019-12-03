import React from 'react';

import Head from '../components/Head/Head'

import Body from '../components/Body/Body'

class Index extends React.Component {
    render(){
        return (
            <div className="index">
                index page
                <Head/>
                <Body/>
            </div>
        )
    }
}

export default Index;
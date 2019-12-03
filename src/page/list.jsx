import React from 'react';
import Head from '../components/Head/Head'
import ListItem from './../components/ListItem/ListItem'

class List extends React.Component {
    render(){
        return (
            <div className="list">
                list page
                <Head/>
                {
                    [1,2,3,4].map(item => (
                        <ListItem key={item} />
                    ))
                }
            </div>
        )
    }
}

export default List;
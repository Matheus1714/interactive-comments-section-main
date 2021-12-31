import React, { Component } from 'react'
import data from '../data/data.json'
import './InteractiveComments.css'

import Footer from '../components/Footer'
import BuildComments from '../components/BuildComments'

export default class InteractiveComments extends Component{
    constructor(props){
        super(props)
        this.state = {
            data
        }
    }

    render(){
        return(
            <div className="InteractiveComments">
                {console.log(data.comments)}
                <BuildComments comments={this.state.data.comments} />
                <Footer />
            </div>
        )
    }
}
import React, { Component } from 'react';


class YouTubeDebugger extends Component{
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateResolution = () => {
        this.setState({
            settings: {
                bitrate: 8,
               video:{
                ...this.state.video,
                resolution: '720p'
               }
            }
        })
    }
    
    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.updateBitrate}></button>
                <button className='resolution' onClick={this.updateResolution}></button>
            </div>
        )
    }
}

export default YouTubeDebugger

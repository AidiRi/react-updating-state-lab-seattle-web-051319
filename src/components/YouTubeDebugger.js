// Code YouTubeDebugger Component Here
import React, { Component, Fragment } from 'react'

class YouTubeDebugger extends Component {

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

  handleBitrate = () => {

    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })

    console.log(this.state)
  }

  handleResolution = () => {

    this.setState({
      ...this.state,
      settings:{
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })

    console.log(this.state) /* How would I get this to show the right way?? (stateDidUpdate method??)*/
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleBitrate} className="bitrate" type="button" >
          {this.state.settings.bitrate} Bitrate
        </button>

        <button onClick={this.handleResolution} type="button" className="resolution" >
          {this.state.settings.video.resolution}
        </button>
      </Fragment>
    );
  }
}
export default YouTubeDebugger

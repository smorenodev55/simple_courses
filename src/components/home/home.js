import React, { Component } from 'react';
import VideoPlayer from '../commons/videoPlayer'

// 1settings.mp4
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      sources: [{
        src: `${__dirname}src/assets/media/1settings.mp4`,
        type: 'video/mp4'
      }],
      subtitles: [
        {
          language: 'en',
          url: `${__dirname}src/assets/media/1settings.vtt`,
          label: "EN"
      }],
      defaultSubtitle: 'en'
    }

    return (
    <div>
      Hola<br/>
      <VideoPlayer { ...videoJsOptions } />
    </div>)
  }
}

export default Home;
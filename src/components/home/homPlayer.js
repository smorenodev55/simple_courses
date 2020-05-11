import React, { Component } from 'react';
import { render } from 'react-dom'
import ReactAwesomePlayer from 'react-awesome-player'

class HomePlayer extends Component {
  
  constructor(props) {
    super(props);

  this.state = {
    name: this.props.name,
    options: {
      //poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
      sources: [{
        type: "video/mp4",
        src: `${__dirname}src/assets/media/${this.props.video}`
      }],
      subtitles: [{
        language: 'en',
        url: `${__dirname}src/assets/media/${this.props.subtitle}`,
        label: "EN"
      }],
      defaultSubtitle: 'en',
      height: 800,
      width: 400
    }
  }
}

componentWillReceiveProps(nextProps){
  console.log('old_name',this.state.name, 'new',nextProps.name) 
  if(this.state.name != nextProps.name){
     let {options} = this.state;
     options.sources[0]['src'] = `${__dirname}src/assets/media/${nextProps.video}`;
     this.setState({options,name:nextProps.name})
   }
}

  loadeddata() {
    console.log('loadeddata')
  }
  canplay() {
    console.log('canplay')
  }
  canplaythrough() {
    console.log('canplaythrough')
  }
  play() {
    console.log('play')
  }
  pause() {
    console.log('pause')
  }
  waiting() {
    console.log('waiting')
  }
  playing() {
    console.log('playing')
  }
  ended() {
    console.log('ended')
  }
  error() {
    console.log('error')
  }

  render () {
    const { options } = this.state
    return <div><ReactAwesomePlayer
      options={options}
      loadeddata={this.loadeddata}
      canplay={this.canplay}
      canplaythrough={this.canplaythrough}
      play={this.play}
      pause={this.pause}
      waiting={this.waiting}
      playing={this.playing}
      ended={this.ended}
      error={this.error}
      style={{width: 800, height: 800}}
    />
    </div>
  }
}

export default HomePlayer;
import React, { Component } from 'react';
import PlayerHome from './homPlayer'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: {}
    }
  }

  componentDidMount(){
    this.setState({selected: this.props.item.list[0].videos[0]})
  }

  setVideo(selected){
    this.setState({selected})
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
             <Button onClick={()=>this.props.backCourse()} variant="warning">Volver</Button> {this.props.item.name} { (this.state.selected.name !== undefined ? `- ${this.state.selected.name}` : '') }
          </Col>
        </Row>
        <Row>
        <Col>
          { this.state.selected.video !== undefined && 
           <PlayerHome video={this.state.selected.video} subtitle={this.state.selected.subtitle} />
          }
        </Col>
        {/** listado de capitulos y videos */}
        <Col xs sm md lg="2">
          {
            this.props.item.list.map((chapter,index)=> 
              <div key={index}>
                <div><strong>{chapter.chapter}</strong></div>
                { chapter.videos.map((video,idx)=> 
                   <div key={idx} onClick={()=>this.setVideo(video)} style={{backgroundColor: '#CCE8F7',cursor:'pointer'}}>
                     <div style={{backgroundColor:'#000',height:0.1}}></div>
                     {video.name}
                   </div>
                 )
                }
              </div>
            )
          }
        </Col>
        </Row>
      </div>
    )
  }
}

export default Course;
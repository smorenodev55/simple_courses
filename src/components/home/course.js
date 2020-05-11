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

  render() {
    return (
      <div>
        <Row>
          <Col><Button onClick={()=>this.props.backCourse()} variant="warning">Volver</Button> {this.props.item.name}</Col>
        </Row>
        <Row>
        <Col>
           <PlayerHome />
        </Col>
        {/** listado de capitulos y videos */}
        <Col xs sm md lg="2">
          {
            this.props.item.list.map((chapter,index)=> 
              <div key={index}>
                <div><strong>{chapter.chapter}</strong></div>
                { chapter.videos.map((video,idx)=> 
                   <div style={{backgroundColor: '#CCE8F7',cursor:'pointer'}}>
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
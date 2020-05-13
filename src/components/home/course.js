import React, { Component } from 'react';
import PlayerHome from './homPlayer'
import {
  Row,
  Col,
  Button,
  Card,
  ListGroup
} from 'react-bootstrap';

class Course extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: {},
      update:false
    }
  }

  componentDidMount(){
    this.setState({selected: this.props.item.list[0].videos[0]})
  }

  setVideo(selected){
    this.setState({selected,update:true})
    setTimeout(()=>{
      this.setState({update:false})
    },500)
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
             <Button size="lg" onClick={()=>this.props.backCourse()} variant="outline-danger"> {`<< Volver `}</Button> &nbsp;&nbsp;&nbsp;&nbsp;{this.props.item.name} { (this.state.selected.name !== undefined ? `- ${this.state.selected.name}` : '') }
          </Col>
        </Row>
        <Row style={{marginTop:40}}>
        <Col>
          { this.state.selected.video !== undefined && 
           <div>
             {this.state.update ? <div></div> :             
             <PlayerHome video={this.state.selected.video} subtitle={this.state.selected.subtitle} name={this.state.selected.name} />
            }
           </div>
          }
        </Col>
        {/** listado de capitulos y videos */}
        <Col xs="2" sm="2" md="2" lg="2" style={{marginRight:30}}>
          {
            this.props.item.list.map((chapter,index)=> 
            <Card style={{ width: '15rem' }} key={index}>
                <div><strong>{chapter.chapter}</strong></div>
                <ListGroup>
                { chapter.videos.map((video,idx)=> 
                   <ListGroup.Item variant="warning" key={idx} onClick={()=>this.setVideo(video)} >
                     {video.name}
                   </ListGroup.Item>
                 )
                }
                </ListGroup>
              </Card>
            )
          }
        </Col>
        </Row>
      </div>
    )
  }
}

export default Course;
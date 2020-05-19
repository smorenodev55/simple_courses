import React, { Component } from 'react';
import {
  Row,
  Col,
  Container,
  ListGroup
} from 'react-bootstrap';
import Course from './course'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses:[],
      selected:{},
      show_course:false,
    }
  }

  componentDidMount() {
    fetch(`${__dirname}src/components/utils/provider.json`)
      .then(response => response.json())
      .then(data => { this.setState({ courses: data.courses })});
  }

  selectCourse(selected){
     this.setState({selected,show_course:true}) 
  }

  backCourse(){
    this.setState({show_course:false})
  }

  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
        <a class="navbar-brand" href="#">Simple Courses</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
      <Container style={{marginTop: 30}}>
        <Row>
          <Col>
             { (this.state.show_course) ? 
                <Course backCourse={this.backCourse.bind(this)} item={this.state.selected}/>  :
                <ListGroup>
                  { this.state.courses.map((item,index)=>
                      <ListGroup.Item variant="light" key={index} onClick={()=>this.selectCourse(item)}>
                        {item.name}
                      </ListGroup.Item>
                      )
                  }
                  </ListGroup>
              }
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default Home;
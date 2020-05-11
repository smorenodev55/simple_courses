import React, { Component } from 'react';
import {
  Row,
  Col
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
      .then(data => { console.log('dt',data),this.setState({ courses: data.courses })});
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
        <Row>
          <Col style={styles.header}>
             Surf Courses
          </Col>
        </Row>
        <Row>
          <Col>
             { (this.state.show_course) ? 
                <Course backCourse={this.backCourse.bind(this)} item={this.state.selected}/>  :
                  <div>
                  { this.state.courses.map((item,index)=>
                      <div key={index} onClick={()=>this.selectCourse(item)} style={{backgroundColor:item.color, height: 30, cursor: 'pointer'}}>
                        <div style={{backgroundColor:'#000',height:0.1}}></div>
                        {item.name}
                      </div>
                      )
                  }
                  </div>
              }
          </Col>
        </Row>
      </div>
    )
  }
}

const styles = {
  header: {
    backgroundColor: '#0747A6',
    color: '#ffff',
    height: '60',
    paddingTop: '20',
    paddingLeft: '50'
  },
}

export default Home;
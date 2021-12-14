import React, { Component } from 'react';
import Matrix from './Matrix';

class Canvas extends Component {

  constructor(props) {
      super(props)
      this.state = {

      }
  }

  componentDidMount () {
    console.log("Canvas compontentDidMount")
  }


  render () {
    return (
        <div className="Canvas">
            <Matrix />
        </div>
        
    )
  }
}

export default Canvas;
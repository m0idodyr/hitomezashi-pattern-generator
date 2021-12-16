import React, { Component } from 'react';
import Hitomezashi from './Hitomezashi';

class Canvas extends Component {

  constructor(props) {
      super(props)
      this.state = {

      }
  }

  render () {
    return (
      <div className="Canvas">
          <Hitomezashi />
      </div>
        
    )
  }
}

export default Canvas;
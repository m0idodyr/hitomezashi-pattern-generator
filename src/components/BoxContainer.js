import React,{ Component } from 'react'
import Box from './Box'
import { rgbValue, generateColors } from './helpers'
  
class BoxContainer extends Component{
  
  // Number of color boxes want shows by default
  static defaultProps = {
    num : 30
  }
  constructor(props){
    super(props)
    this.state = {
      
      // Color state contains array of rgb color values
      colors : generateColors(this.props.num)
    }
    this.changeColor = this.changeColor.bind(this)
  }
  
  changeColor(c){
    
    // Create new random rgb color
    let newColor
    do{
      newColor = `rgb(
        ${rgbValue()},
        ${rgbValue()},
        ${rgbValue()}
      )`
        
    // If new rgb color is equal to previous 
    // color of the box then again create new 
    // rgb color value
    }while(newColor === c)
  
    // Change colors array state by inserting 
    // new color value in place of previous color
    this.setState(st => ({
      colors : st.colors.map(color => {
        if(color !== c) return color
        return newColor
      })
    }))
  }
  
  render(){ 
    return(
      <div className='BoxContainer'>
        {this.state.colors.map(color => (
          
          // For each color make a box component
          <Box color={color} changeColor={this.changeColor}/>
        ))}
      </div>
    )
  }
}
  
export default BoxContainer
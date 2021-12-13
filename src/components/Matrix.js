import React, { Component } from 'react';

class Matrix extends Component {

  constructor(props) {
      super(props)
      this.state = {
          
      }
  }

  render () {
    return (
      <div>
        <TableGenerator row={10} col={10}/>
      </div>
    )
  }

}

const TableGenerator = (props) => {

  //Create the 2D array with cell values
  let tbl = []
  for(let i = 0; i < props.row; i++){
      tbl.push([])
      for(let j = 0; j < props.col; j++){
          tbl[i].push(`${i},${j}`)
      }     
  }

  //Create the table object and map through the rows, creating <tr> and <tr> elements with the cell values
  let table = tbl.map((array) => { 
    //"For each array in the tbl -array..."
    let celledRow = array.map((cell) => {
      //...iterate through each cell in an array, in the tbl -array, and return the cells as <td> elements with cell value
      let b = <td>{cell}</td>
      return b
    })
    
    //Return a JSX array back to the 2-dimensional "table" -array, as a replacement of the original arrays with simple cell values.
    let a =  <tr>{celledRow}</tr>
    return a

  })

  //Create table object with conditional classNames, so the elements can be given different CSS properties, which eventually form the hitomezashi - or any other grid-style - pattern
  let classNamedTable = table.map( item => {

    let elementArrayToReturn = [];
    //Iterate through each of the <td>{cell}</td> elements in the table object and conditionally return a replacement with correct className value
    item.props.children.forEach(element => {

      //Check if the innerHTML value is "even" or "odd" and return a table cell with the right className accordingly
      let floatValue = +(element.props.children.replace(/,/,'.'))
      if((floatValue * 10) % 2 === 0) {
        elementArrayToReturn.push(<td className="even">{element.props.children}</td>)
      } else {
        elementArrayToReturn.push(<td className="odd">{element.props.children}</td>)
      }

    })

    //Return the array populated with new <td> elements
    return (
      <tr className = "tableRow">
        {elementArrayToReturn}
      </tr>
    )
  })

  return (
      <table className = "table">{classNamedTable}</table>
  )

}

export default Matrix;
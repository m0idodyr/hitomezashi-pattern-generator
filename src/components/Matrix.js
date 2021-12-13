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

  //Create the table object and map through the rows, creating <tr> and <td> elements with the cell values
  let table = tbl.map((array) => { 
    //"For each array in the tbl -array, iterate through each of the <td>{cell}</td> elements in the table object and conditionally return a replacement with correct className value."
    let elementArrayToReturn = [];
    array.forEach(element => {
      //Check if the innerHTML value is "even" or "odd" and return a table cell with the className accordingly
      let floatValue = +(element.replace(/,/,'.'))
      if((floatValue * 10) % 2 === 0) {
        elementArrayToReturn.push(<td className="even">{element}</td>)
      } else {
        elementArrayToReturn.push(<td className="odd">{element}</td>)
      }
    })
    
    //Return a JSX array back to the 2-dimensional "table" -array, as a replacement of the original arrays with simple cell values.
    return (
      <tr className = "tableRow">
        {elementArrayToReturn}
      </tr>
    )

  })

  return (
      <table className = "table">{table}</table>
  )

}

export default Matrix;
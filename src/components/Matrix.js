import React, { Component } from 'react';

class Matrix extends Component {

  constructor(props) {
      super(props)
      this.inputStringToCharArrayParser = this.inputStringToCharArrayParser.bind(this)
      this.characterArrayToBooleanParser = this.characterArrayToBooleanParser.bind(this)
      this.booleanArray = this.booleanArray.bind(this)
      this.state = {
        stringInput: props.stringInput,
        hitomezashiTable: [],
      }
  }

  inputStringToCharArrayParser (stringInput) {
    let charArray = stringInput.split('')
    return charArray
  }

  characterArrayToBooleanParser (charArray) {
    let regexForVowels = /^[aeiouyäöå]$/i
    let booleanArray = []
    
    charArray.forEach(element => {
      if (regexForVowels.test(element)) {
        booleanArray.push(true)
      } else {
        booleanArray.push(false)
      }
    })
    return booleanArray
  }

  twoDimensionalArrayGenerator (row, col) {
    //Currently just fills the cells with loop iterations
    let twoDimensionalArray = []
    for (let i = 0; i < row; i++){
        twoDimensionalArray.push([])
      for(let j = 0; j < col; j++){
        twoDimensionalArray[i].push(`${i},${j}`)
      }     
    }
    return twoDimensionalArray
  }

  mappingTwoDimensionalArray (twoDimensionalArray, booleanArray) {
    let iterator = 0;
    let table = twoDimensionalArray.map((array) => { 
      //"For each array in the twoDimensionalArray -array, iterate through each of the <td>{cell}</td> elements in the table object and conditionally return a replacement with correct className value."
      let elementArrayToReturn = [];
      array.forEach(element => {
        //Check if the innerHTML value is "even" or "odd" and return a table cell with the className accordingly
        if(booleanArray[iterator] === true) {
          elementArrayToReturn.push(<td className="even">{element}</td>)
        } else {
          elementArrayToReturn.push(<td className="odd">{element}</td>)
        }
      })
      iterator++
      //Return a JSX array back to the 2-dimensional "table" -array, as a replacement of the original arrays with simple cell values.
      return (
        <tr className = "tableRow">
          {elementArrayToReturn}
        </tr>
      )
  
    })
    return table
  }

  booleanArray(){
    console.log(this.characterArrayToBooleanParser(this.inputStringToCharArrayParser(this.state.stringInput)))
  }



  render () {
    let charArray = this.inputStringToCharArrayParser(this.state.stringInput)
    let booleanArray = this.characterArrayToBooleanParser(charArray)
    let twoDimensionalArray = this.twoDimensionalArrayGenerator(this.state.stringInput.length, this.state.stringInput.length) // Row, Col
    let table = this.mappingTwoDimensionalArray(twoDimensionalArray, booleanArray)
    return (
      <div>
        <table className = "table">{table}</table>
      </div>
    )
  }

}

export default Matrix;
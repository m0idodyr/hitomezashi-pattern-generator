import React, { Component } from 'react';

class Matrix extends Component {

  constructor(props) {
      super(props)
      this.inputStringToCharArrayParser = this.inputStringToCharArrayParser.bind(this)
      this.characterArrayToBooleanParser = this.characterArrayToBooleanParser.bind(this)
      this.inputStringToNumberArrayParser = this.inputStringToNumberArrayParser.bind(this)
      this.mappingVerticalsToMappedArray = this.mappingVerticalsToMappedArray.bind(this)
      this.state = {
        stringInput: "uoyhtiwebecrofehtyam",
        numberInput: "314159265359",
      }
  }

  componentDidMount () {

  }

  inputStringToNumberArrayParser (numberInput) {
    let numberArray = numberInput.split('')
    return numberArray
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
    let rowIterator = 0;
    let table = twoDimensionalArray.map((array) => { 
      //"For each array in the twoDimensionalArray -array, iterate through each of the <td>{cell}</td> elements in the table object and conditionally return a replacement with correct className value."
      let elementArrayToReturn = [];
      let numberInputArrayToIterate = this.inputStringToNumberArrayParser(this.state.numberInput)
      let cellIterator = 0;
      array.forEach(element => {
        //Check if the innerHTML value is "even" or "odd" and return a table cell with the className accordingly
        if(booleanArray[rowIterator] === true && cellIterator % 2 === 1) {
          elementArrayToReturn.push(<td className="borderBottom">{`${element}`}</td>)
        } else if(booleanArray[rowIterator] === false && cellIterator % 2 === 0) {
          elementArrayToReturn.push(<td className="borderBottom">{`${element}`}</td>)
        } else {
          elementArrayToReturn.push(<td className="noBorder">{`${element}`}</td>)
        }
        cellIterator++
      })
      rowIterator++
      //Return a JSX array back to the 2-dimensional "table" -array, as a replacement of the original arrays with simple cell values.
      return (
        <tr className = "tableRow">
          {elementArrayToReturn}
        </tr>
      )
  
    })
    return this.mappingVerticalsToMappedArray(table)
  }

  mappingVerticalsToMappedArray (table) {
    let rdyTable = table
    console.log(table)
    //Iterate through the cells of the first array (or use the numberInput array) and check the modulo of every cell in row. If it returns false,
    //let's say [0,0] equals false, inject [1,0........word.length,0] <td>'s variably with rightBorder. Set a boolean to true, conditionally
    //inject the <td> if boolean is true, and return it as is, if false. Do this until length of the numberInput and return table with
    //correct classnames.

    //create a function that works as the "boolean machine", for example checker(array) that injects the classes accordingly depending
    //whether the first value is odd or even. Effectively we open the table arrays and re-map them accordingly to a new table.
    //See if you can look into the classNames of the <td>'s. If there's already a bottomBorder class and you should be injecting
    //the rightBorder class, return a version which has both, else just return the rightBorder.
    let elementArrayToReturn = [];

    for (let i = 0; i < this.state.stringInput.length; i++) {
      //console.log(table[0].props.children[i].props.children)
      console.log("RIVI ALKAA")
      if (true) { //table[0].props.children[i].props.children % 2 === 1
        for (let j = 0; j < this.state.numberInput.length; j++) {
          console.log(table[i].props.children[j].props.children) //Logs columns from top to down.
        }
      }
    }

    return rdyTable
  }

  onSubmit(e) {
    this.setState({
      stringInput: e.target.value
    })
    console.log(this.state.stringInput)
  }

  render () {
    let charArray = this.inputStringToCharArrayParser(this.state.stringInput)
    let booleanArray = this.characterArrayToBooleanParser(charArray)
    let twoDimensionalArray = this.twoDimensionalArrayGenerator(this.state.stringInput.length, this.state.numberInput.length) // Row, Col
    let table = this.mappingTwoDimensionalArray(twoDimensionalArray, booleanArray)
    return (
      <div>
        <input value={this.state.stringInput} onChange={e => this.onSubmit(e)} />
        <table className = "table">{table}</table>
      </div>
    )
  }
}

export default Matrix;
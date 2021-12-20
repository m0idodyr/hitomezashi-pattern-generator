import React, { Component } from 'react';

class Hitomezashi extends Component {

  constructor(props) {
    super(props)
    this.inputStringToCharArrayParser = this.inputStringToCharArrayParser.bind(this);
    this.characterArrayToBooleanParser = this.characterArrayToBooleanParser.bind(this);
    this.inputStringToNumberArrayParser = this.inputStringToNumberArrayParser.bind(this);
    this.mappingVerticalsToMappedArray = this.mappingVerticalsToMappedArray.bind(this);

    this.state = {
      stringInput: "hitomezashipatterngenerator",
      numberInput: "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679",
    }
  }

  //Return an array of integers.
  inputStringToNumberArrayParser (numberInput) {
    let numberArray = numberInput.split('');
    return numberArray;
  }

  //Return an array of characters.
  inputStringToCharArrayParser (stringInput) {
    let charArray = stringInput.split('');
    return charArray;
  }

  //Return an array filled with booleans according to whether the character is a vowel or a consonant.
  characterArrayToBooleanParser (charArray) {
    let regexForVowels = /^[aeiouyäöå]$/i;
    let booleanArray = [];
    
    charArray.forEach(element => {
      if (regexForVowels.test(element)) {
        booleanArray.push(true);
      } else {
        booleanArray.push(false);
      }
    })
    return booleanArray;
  }

  //Return 2D-array (Populating cells with iteration values, but they are not necessary for the functionality).
  twoDimensionalArrayGenerator (row, col) {
    let twoDimensionalArray = [];
    for (let i = 0; i < row; i++){
        twoDimensionalArray.push([]);
      for(let j = 0; j < col; j++){
        twoDimensionalArray[i].push(`${i},${j}`);
      }     
    }
    return twoDimensionalArray;
  }

  /**
   * If character (y-axis) in the iteration is a vowel, and the row cell is odd, array.push() a <td> with borderBottom CSS -class.
   * If character (y-axis) in the iteration is a consonant, and the row cell is even, array.push() a <td> with borderBottom CSS -class.
   * Returns an array with <tr> (table row) elements filled with <td> (cell) elements like this:
   * - - - - - - - - - -
   *  - - - - - - - - -
   * - - - - - - - - - -
   *  - - - - - - - - -
   */
  mappingTwoDimensionalArray (twoDimensionalArray, booleanArray) {
    let rowIterator = 0;
    let table = twoDimensionalArray.map((array, key) => { 
      let elementArrayToReturn = [];
      let cellIterator = 0;
      for (let i = 0; i < array.length; i++) {
        if(booleanArray[rowIterator] === true && cellIterator % 2 === 1) {
          elementArrayToReturn.push(<td key={i} className="borderBottom"></td>);
        } else if(booleanArray[rowIterator] === false && cellIterator % 2 === 0) {
          elementArrayToReturn.push(<td key={i} className="borderBottom"></td>);
        } else {
          elementArrayToReturn.push(<td key={i} className="noBorder"></td>);
        }
        cellIterator++;
      }
      rowIterator++;
      return (
        <tr key={key} className = "tableRow">
          {elementArrayToReturn}
        </tr>
      )
    })
    return this.mappingVerticalsToMappedArray(table);
  }

  /**
   * If number (x-axis) is even and column cell is odd (boolean === true), check if the cell has a class of borderBottom and push <td> with either horizontal AND vertical border or only vertical border.
   * If number (x-axis) is odd and column cell is even (boolean === false), check if the cell has a class of borderBottom and push <td> with either horizontal AND vertical border or only vertical border.
   * Otherwise push the original cell.
   * Returns an array with <tr> (table row) elements filled with <td> (cell) elements, now with both horizontal and vertical borders accordingly.
   */
  mappingVerticalsToMappedArray (table) {
    let boolean = true;
    let finalArray = table.map((array, key) => {
      let elementArrayToReturn = [];
      for (let i = 0; i < array.props.children.length; i++) {
        if (this.state.numberInput[i] % 2 === 0 && boolean === true) {
          if(array.props.children[i].props.className === "borderBottom") {
            elementArrayToReturn.push(<td key={i} className="borderBottomBorderRight"></td>);
          } else {
            elementArrayToReturn.push(<td key={i} className="borderRight"></td>);
          }
        } else if (this.state.numberInput[i] % 2 === 1 && boolean === false) {
          if(array.props.children[i].props.className === "borderBottom") {
            elementArrayToReturn.push(<td key={i} className="borderBottomBorderRight"></td>);
          } else {
            elementArrayToReturn.push(<td key={i} className="borderRight"></td>);
          }
        } else {
          elementArrayToReturn.push(array.props.children[i]);
        }
      }
      boolean = !boolean;
      return (
        <tr key={key} className = "tableRow">
          {elementArrayToReturn}
        </tr>
      )
    })
    return finalArray;
  }

  //Read input to state.
  changeStringInput(e) {
    this.setState({
      stringInput: e.target.value
    })
  }

  //Read input to state.
  changeNumberInput(e) {
    this.setState({
      numberInput: e.target.value
    })
  }

  render () {
    if (this.state.stringInput.length >= 2 && this.state.numberInput.length >= 2) {
      let charArray = this.inputStringToCharArrayParser(this.state.stringInput);
      let booleanArray = this.characterArrayToBooleanParser(charArray);
      let twoDimensionalArray = this.twoDimensionalArrayGenerator(this.state.stringInput.length, this.state.numberInput.length);
      let table = this.mappingTwoDimensionalArray(twoDimensionalArray, booleanArray);
      return (
        <div>
          <div className="inputWrapper">
            <input id="stringInputField" value={this.state.stringInput} onChange={e => this.changeStringInput(e)} />
            <input id="numberInputField" value={this.state.numberInput} onChange={e => this.changeNumberInput(e)} />
          </div>
          <table className = "table">
            <tbody>
              {table}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <div className="inputWrapper">
            <input id="stringInputField" value={this.state.stringInput} onChange={e => this.changeStringInput(e)} />
            <input id="numberInputField" value={this.state.numberInput} onChange={e => this.changeNumberInput(e)} />
          </div>
        <div className="typeInAtLeastMessage">Type in at least two letters and digits in order to begin</div>
      </div>
      )
    }
  }
}

export default Hitomezashi;
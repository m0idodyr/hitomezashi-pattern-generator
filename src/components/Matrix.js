import React, { Component } from 'react';

class Matrix extends Component {

  constructor(props) {
      super(props)
      this.inputStringToCharArrayParser = this.inputStringToCharArrayParser.bind(this)
      this.characterArrayToBooleanParser = this.characterArrayToBooleanParser.bind(this)
      this.inputStringToNumberArrayParser = this.inputStringToNumberArrayParser.bind(this)
      this.mappingVerticalsToMappedArray = this.mappingVerticalsToMappedArray.bind(this)
      this.state = {
        stringInput: "hitomezashipatterngenerator",
        numberInput: "314159265358979323846264338327950288419716939937510582097494459230",
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
      let elementArrayToReturn = [];
      let cellIterator = 0;
      array.forEach(() => {
        if(booleanArray[rowIterator] === true && cellIterator % 2 === 1) {
          elementArrayToReturn.push(<td className="borderBottom"></td>)
        } else if(booleanArray[rowIterator] === false && cellIterator % 2 === 0) {
          elementArrayToReturn.push(<td className="borderBottom"></td>)
        } else {
          elementArrayToReturn.push(<td className="noBorder"></td>)
        }
        cellIterator++
      })
      rowIterator++
      return (
        <tr className = "tableRow">
          {elementArrayToReturn}
        </tr>
      )
  
    })
    return this.mappingVerticalsToMappedArray(table)
  }

  mappingVerticalsToMappedArray (table) {
 
    let boolean = true;
    let uusiArray = table.map((array => {
      let valiaikaArray = []
      console.log(boolean)
      for (let i = 0; i < array.props.children.length; i++) {
        console.log(`${array.props.children[i].props.children} + ${this.state.numberInput[i]}`)
          if (this.state.numberInput[i] % 2 === 0 && boolean === true) {
            console.log("tupla")
            if(array.props.children[i].props.className === "borderBottom") {
              valiaikaArray.push(<td className="borderBottomBorderRight"></td>)
            } else {
              valiaikaArray.push(<td className="borderRight"></td>)
            }
          } else if (this.state.numberInput[i] % 2 === 1 && boolean === false) {
            if(array.props.children[i].props.className === "borderBottom") {
              valiaikaArray.push(<td className="borderBottomBorderRight"></td>)
            } else {
              valiaikaArray.push(<td className="borderRight"></td>)
            }
          } else {
            valiaikaArray.push(array.props.children[i])
          }
      }
      boolean = !boolean
      return (
        <tr className = "tableRow">
          {valiaikaArray}
        </tr>
      )
    }))

    return uusiArray
  }

  changeStringInput(e) {
    this.setState({
      stringInput: e.target.value
    })
  }

  changeNumberInput(e) {
    this.setState({
      numberInput: e.target.value
    })
  }

  render () {
    let charArray = this.inputStringToCharArrayParser(this.state.stringInput)
    let booleanArray = this.characterArrayToBooleanParser(charArray)
    let twoDimensionalArray = this.twoDimensionalArrayGenerator(this.state.stringInput.length, this.state.numberInput.length)
    let table = this.mappingTwoDimensionalArray(twoDimensionalArray, booleanArray)
    return (
      <div>
        <input value={this.state.stringInput} onChange={e => this.changeStringInput(e)} />
        <input value={this.state.numberInput} onChange={e => this.changeNumberInput(e)} />
        <table className = "table">{table}</table>
      </div>
    )
  }
}

export default Matrix;
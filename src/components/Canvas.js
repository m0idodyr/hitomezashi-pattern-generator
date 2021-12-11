import React,{ Component } from 'react'
  
class Canvas extends Component{
  constructor(props){
    super(props)
    this.renderTable = this.renderTable.bind(this)
    this.state = {
        charArray:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P']
    }
  }


  renderTable = () => {
    const { charArray = [] } = this.state
    
    const cols = this.props.x // should come from state or props    
    const rows = Math.ceil(charArray.length / cols)
    
    return Array.from({ length: rows }, (_, i) => (
      <tr>
      {
        charArray.slice(i * cols, (i + 1) * cols)
          .map(c => <td>{c}</td>)
      }
      </tr>
    ))
  }

  sortTable = () => {
    const jsxArray = this.renderTable()
    jsxArray.forEach(element => console.log(element.props.children[0].props.children))
    //jsxArray[0].props.children[0].props.children
  
    return jsxArray
  }

    render(){ 
        return <div>
        <h4>Matrix Table</h4>
        <table id="table">
          {this.sortTable()}
        </table>  
      </div>;
    }
}

export default Canvas
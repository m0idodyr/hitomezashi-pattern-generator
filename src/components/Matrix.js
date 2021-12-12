import React, { Component } from 'react';

class Matrix extends Component {
    constructor(props) {
        super(props)
        this.state = { //state is by default an object
            students: [
               { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
               { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
               { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
               { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
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

const RenderTableData = (props) => {
    return props.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
}

const RenderTableHeader = (props) => {
    let header = Object.keys(props.students)
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }




const TableGenerator = (props) => {

    let tbl = []
  
    for(let i = 0; i < props.row; i++){
        tbl.push([])
        for(let j = 0; j < props.col; j++){
            tbl[i].push(`${i},${j}`)
        }     
    }

    console.log(tbl)
    
    let items = tbl.map((row) => { 
    
        let a =  <tr>{row}</tr>
        return a

    }
        
        /*<tr>{()=>{

        //console.log("row length " + row.length) ---> 10
        //console.log("a length " + a.length) ---> perpetually 0
        for(let i = 0; i < row.length; i++){

            row.forEach(item => {
                console.log(item)
                if (item === "0,8") {
                    return <tr className={`nollakasi`}>nollakasi</tr>
                } else {
                    return <tr className={`${item}`}>{item}</tr>
                }

            })

        }


        }}</tr>*/
    )

    console.log(items)
    return (
        <table>{items}</table>
    )

}

//items[0].props.children[0] = "0,0"

/*const PickUpList = (props) => {
  //Iterate through props.data and create JSX objects of the items which are then returned inside of a table.
  let items = props.data.map((item) => 
    <tr className="pickupListTr" key={item.id}>
      <td className="pickupListTd" key={item.id}>{'https://youtu.be/'}<span className="pickupListSpan">{item.videoId}{'?t='}{item.time}</span></td>
      <td align="right"><button className="noselect btn btn-outline-light text-dark pickupListDelButton" onClick={() => {props.deletePickupListItem(item.id)}}>X</button></td>
    </tr>)
  return (
    <div className="pickupListBackgroundDiv">
      <table className="pickupListTable">
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          <tr className="tableFakePadding"></tr>
            {items}
          <tr className="tableFakePadding"></tr>
        </tbody>
      </table>
    </div>
  )
}*/

export default Matrix;
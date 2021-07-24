
import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            userInput:"",
            todo:[]
        }
    }
    updateInput(value){
        this.setState({userInput:value})
    }
    additem=(e)=>{
        e.preventDefault();
    
        
        if(this.state.userInput!==''){
            const userInput={
                id:Math.random(),
                value:this.state.userInput
            };

        
        const todo=[...this.state.todo];
        todo.push(userInput);
    
        this.setState({
            todo,
            userInput:""
        })

    }
}
deleteItem(id){
    
    const todo=[...this.state.todo];
    const updatetodo=todo.filter(item=>item.id!==id);

    this.setState(
    {
        todo:updatetodo
    }
    )
}
    
    render() {
    


        
        return (
            <div>

               <form className="formdemo" onSubmit={this.additem}>
                   <input type="text" name="name" placeholder="add todo..."
                   value={this.state.userInput}
                   onChange={e=>this.updateInput(e.target.value)}
                      /> 
                  <button name="submit" type="submit" value="submit">Save</button>              
               </form>
               <ul>
                   {this.state.todo.map(item=>{
                       return <li key={item.id} onClick={()=>this.deleteItem(item.id)}> {item.value}</li>
                   })}


               </ul>

            


            </div>
        )
    }
}
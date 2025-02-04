import React,{Component} from 'react'

class AddToDo extends Component {
    state = {
        item :''
    }

    handleChange = (e) =>{
        this.setState({
            item : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            item : ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.item}></input>
                <button>Add ToDo</button>
                </form>
            </div>
        )

    }
}

export default AddToDo
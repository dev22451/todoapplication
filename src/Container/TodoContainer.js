import React from 'react';
import AddTodoInput from '../Component/AddTodoInput'
import TodoList from '../Component/TodoList'


class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Basic state created 
            text: '',
            todoList: [],
            isChecked: false

        }
        // Binding the constructor
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleOnsubmit = this.handleOnsubmit.bind(this);
        this.handleOnCheck = this.handleOnCheck.bind(this);
    }

    handleOnchange(e) {
        // Change the state 
        this.setState({
            text: e.target.value
        })
    }

    handleOnsubmit(){
        // Write Logic to insert text in todo array
        const {todoList,text } = this.state;
        let refTodoList = todoList;
        refTodoList.push({
            name: text,
            isChecked: false
        })

        this.setState({
            todoList:refTodoList,
            text:''
        })
    }

    handleOnCheck (index) {
        let refList = this.state.todoList;
        if(!refList[index].isChecked)
        refList[index].isChecked = true
        else
        refList[index].isChecked = false

        this.setState({
            todoList: refList
        })
    }

    render() {
        const { text, todoList } = this.state;
        console.log(this.state,"RENDER_COMPLETE"); // USING THIS YOU CAN SEE THE LIVE CHANGES DONE ON STATE 
        // Need to open Chrome UI Developer mode and see the changes on handle
        // But make sure when you make PR its should not be included
        
        return (
            <div>
                <AddTodoInput
                    text={text}
                    handleOnsubmit={this.handleOnsubmit}
                    handleOnchange={this.handleOnchange}
                />
                <TodoList todoList={todoList} handleOnCheck={this.handleOnCheck} />
            </div>
        )
    }
}

export default TodoContainer
import './Style.css'
const TodoList = (props) => {
    const {todoList, handleOnCheck} = props;
    return (
        <div >
            {
                todoList.map((list,index) => {
                    const { name, isChecked} = list
                    return (
                        <div className="todo-list">
                            <input type="checkbox" checked={isChecked} onChange={()=>{handleOnCheck(index)}} />
                            {name}
                            {isChecked === true && <span >Completed</span>}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TodoList;
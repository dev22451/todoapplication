import './Style.css'
const AddTodoInput = (props) => {
    const { handleOnchange, handleOnsubmit, text } = props;
    return (
        <div className="TodoInput">
            <input 
                type="text" 
                value={text} 
                placeholder="Enter the todo name" 
                onChange={handleOnchange} 
            />
            <button onClick={handleOnsubmit}  >
                Add Todo
            </button>
        </div>
    )
}

export default AddTodoInput
import { TODOLISTVALUES } from "../../constants/todolistValues";
import TodoItem from "../todo-item";

function TodoList() {
    
    return (
        <div className="row">
            <div className="col-md-6 card p-3">
                {
                    TODOLISTVALUES.map((item)=> (
                        <TodoItem key={item.name} {...item}/>
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList
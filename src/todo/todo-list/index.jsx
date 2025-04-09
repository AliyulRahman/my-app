import { TODOLISTVALUES } from "../../constants/todolistValues";
import TodoItem from "../todo-item";

function TodoList() {
    
    return (
        <div className="row">
            <div className="col-md-6 card p-3">
                <TodoItem {...TODOLISTVALUES[0]}/>
                <TodoItem {...TODOLISTVALUES[1]}/>
                <TodoItem {...TODOLISTVALUES[2]}/>
                <TodoItem {...TODOLISTVALUES[3]}/>
                <TodoItem {...TODOLISTVALUES[4]}/>
                <TodoItem {...TODOLISTVALUES[5]}/>
                <TodoItem {...TODOLISTVALUES[6]}/>
                <TodoItem {...TODOLISTVALUES[7]}/>
                <TodoItem {...TODOLISTVALUES[8]}/>
                <TodoItem {...TODOLISTVALUES[9]}/>
            </div>
        </div>
    );
}

export default TodoList
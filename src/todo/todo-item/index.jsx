function TodoItem({name,completed}) {
    const checkStatus = (completed)=> {
        return completed ? <label className="text-decoration-line-through">{name}</label> : <label >{name}</label>
    }
  return (
    <div className="d-flex justify-content-between mb-2">
      <div>
        <input type="checkbox" checked={completed} className="me-3"/>
        {checkStatus(completed)}
      </div>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  );
}

export default TodoItem
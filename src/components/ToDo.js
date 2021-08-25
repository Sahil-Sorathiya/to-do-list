import React, {useState} from "react";

export default function ToDo(props) {

  const [gray, setGray] = useState(false);

  const deleteTodoHandler = () => {
    return props.onDelete(props.todo.id);
  };

  const clickHandler = () => {
    setGray(()=>{
      return !gray
    })
  }

  return (
    <div className="ToDo" onClick={clickHandler}>
      <div className={`ToDo__text ${ gray ? "ToDo__text__gray" : "" }`}>{props.todo.text}</div>
      <div className="ToDo__DeleteIcon__div" onClick={deleteTodoHandler}>
        <i className="bi bi-trash ToDo__DeleteIcon"></i>
      </div>
    </div>
  );
}

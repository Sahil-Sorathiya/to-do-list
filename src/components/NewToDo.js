import React , {useState}from "react";
import "../index.css";


export default function NewToDo(props) {

  const [inputData, setInputData] = useState("");

  const submitBtnHandler = (event) => {
    if(inputData !== ""){
    const todo = {
      "text": inputData,
      id: Math.round(Math.random()*1000)
    }
    props.onNewTodo(todo)
  }
    setInputData("")
    event.preventDefault();
  }

  const changeInputHandler = (event) => {
    const data = event.target.value;
     setInputData(data);
  }
  
  return (
    <div className="NewToDo">
      <div className="NewToDo__text">
        <input
          type="text"
          className="NewToDo__InputBox"
          placeholder="Add new TODO here"
          onChange={changeInputHandler}
          value={inputData}
        />
      </div>
      <button type="submit" className="NewToDo__Button" onClick={submitBtnHandler}>
        +
      </button>
    </div>
  );
}

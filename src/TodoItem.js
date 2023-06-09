import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./todoItem.css";
import { useState } from "react";
import TodoList from "./TodoList";

const TodoItem = () => {
  const [item, renderItem] = useState("");
  const [listItem, setListItem] = useState([]);

  const addItemToList = () => {
    if (item === "") {
      alert("NO Todo present ");
    } else {
      setListItem((oldItem) => {
        return [...oldItem, item];
      });
      renderItem("");
    }
  };

  const deleteItem=(index)=>{
    const updatedList=[...listItem]
    updatedList.splice(index,1)
    setListItem(updatedList);
}



  return (
    <>
      <div className="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Todo"
          value={item}
          onChange={(e) => {
            renderItem(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button className="button" type="button" onClick={addItemToList}>
            <AddIcon />
          </button>
        </div>
      </div>

        <ul class="list">
          {listItem.map((item,index) => {
            return (
              <TodoList it={item} id={index} onSelect={deleteItem}/>
            );
          })}
        </ul>
    </>
  );
};

export default TodoItem;

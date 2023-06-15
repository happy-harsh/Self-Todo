import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./todoItem.css";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';


const TodoItem = () => {
  const [item, renderItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const editItem=()=>{
    return 0;
  }
  const addItemToList = () => {
    if (item === "" && item!=='Enter') {
      alert("NO Todo present ");
    } else {
      const allInputData = {id: new Date().getTime.toString(), name: item};
      setListItem((oldItem) => {
        return [...oldItem, allInputData];
      });
      
      renderItem("");
    }
  };

  const DeleteItem = (ind) => {
    // const updatedList = [...listItem];
    // updatedList.splice(ind, 1);
    const updatedList = listItem.filter((index)=>{
      return index===ind;
    })
    setListItem(updatedList);
  };

  return (
    <div>
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

      <ol className="list">
        {listItem.map((elem) => {
          return (
            <li>
              <p
                class="list-text"
                style={isHovered ? { textDecoration: "line-through" } : {}}
              >
                {elem.name}
              </p>
              <button
                class="list-edit"
                onClick={()=>{editItem(elem.id)}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <EditIcon/>
                </button>
              <button
                class="list-button"
                onClick={()=>{DeleteItem(elem.id)}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DeleteIcon />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TodoItem;

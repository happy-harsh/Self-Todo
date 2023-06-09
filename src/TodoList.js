import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = ({it, onSelect,id}) => {

  return (
      <li>
        <button class="list-button" onClick={()=>{onSelect(id)}} >
          <DeleteIcon />
        </button>
        <span class="list-text">{it}</span>
      </li>
  );
};

export default TodoList;

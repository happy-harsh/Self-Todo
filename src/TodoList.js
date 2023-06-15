import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoList = ({ it, onSelect, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <li>
        <p
          class="list-text"
          style={isHovered ? { textDecoration: "line-through" } : {}}
        >
          {it}
          </p>
        <button
          class="list-button"
          onClick={() => {
            onSelect(id);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <DeleteIcon />
        </button>
      </li>
  );
};

export default TodoList;

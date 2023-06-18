import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./todoItem.css";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = () => {
  const [item, renderItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [hoveredTextId, setHoveredTextId] = useState(null);
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [isEditItem,setEditItem]=useState(null)

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  const handleTextHover = (textId) => {
    setHoveredTextId(textId);
  };

  const handleTextLeave = () => {
    setHoveredTextId(null);
  };

  const editItem = (id) => {
    // find(element, index,array and indexvalue)
    let newEditItem = listItem.find((elem) => {
      return elem.id === id;
    });

    settoggleSubmit(false);
    renderItem(newEditItem.name)
    setEditItem(id);
  };
  const addItemToList = () => {
    if (item === "" && item !== "Enter") {
      alert("NO Todo present ");
    } 
    else if(item!=="" && !toggleSubmit)
    {
      setListItem(listItem.map((elem)=>{
  
        if(elem.id===isEditItem){
          return {...elem,name:item}
        }
        return elem;
      }))
      settoggleSubmit(true);
      renderItem("");
    }
    else
    {
      const allInputData = { id: new Date().getTime().toString(), name: item };
      console.log(allInputData)
      setListItem([...listItem,allInputData]);

      renderItem("");
    }
  };

  const DeleteItem = (index) => {
    // const updatedList = [...listItem];
    // updatedList.splice(index, 1);
    const updatedList = listItem.filter((elem) => {
      return elem.id!==index;
    });
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
          {toggleSubmit ? (
            <button className="addbutton" type="button" onClick={addItemToList}>
              <AddIcon />
            </button>
          ) : (
            <button
              className="edit"
              onClick={() => {
                addItemToList();
              }}
            >
              <EditIcon />
            </button>
          )}
        </div>
      </div>

      <ul>
        {listItem.map((elem) => {
          return (
            <li
              className="container"

              onMouseEnter={() => {
                handleTextHover(elem.id);
              }}
              onMouseLeave={handleTextLeave}
            >
              <p
                            key={elem.id}
                className="right"
                style={
                  isButtonHovered && hoveredTextId === elem.id
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                {elem.name}
              </p>
              <div className="left">
                <button
                  className="edit"
                  onClick={() => {
                    editItem(elem.id);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  className="del"
                  onClick={() => {
                    DeleteItem(elem.id);
                  }}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  <DeleteIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoItem;

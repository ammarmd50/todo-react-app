//Task.jsx
import { useState } from "react";
// import "./Task.css";

function Task({ task, index, setTaskArray }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

//   const edit = () => {
//     console.log("setTaskArray ", setTaskArray);

//     // setTaskArray((lastVal) => {
//     //   console.log("index ", index);
//     //   console.log("lastVal ", lastVal);
//     //   lastVal[index] = "deleted";
//     //   return lastVal;
//     // });

//     setTaskArray((lastVal) => {
//   const newArray = [...lastVal];
//   newArray[index] = "deleted";
//   return newArray;w
// });
//   };

 const deleteTask = () => {
    setTaskArray((lastVal) => {
      return lastVal.filter((task, i) => i !== 
      index);
    });
  };

  const saveTask = () => {
    setTaskArray((lastVal) => {
      const newArray = [...lastVal];
      newArray[index] = editValue;
      return newArray;
    });
    setIsEditing(false);
  };


  return (
    <div className="task-item">
      <div className="task-content">
        {isEditing ? (
          <input 
            className="edit-input"
            type="text" 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span>{task}</span>
        )}
      </div>
      
      <div className="task-actions">
        {isEditing ? (
          <button className="btn-save" onClick={saveTask}>
            SAVE
          </button>
        ) : (
          <button className="btn-edit" onClick={() => setIsEditing(true)}>
            EDIT
          </button>
        )}

        <button className="btn-delete" onClick={deleteTask}>
         DELETE 
        </button>
      </div>
    </div>
  );
}

export { Task };

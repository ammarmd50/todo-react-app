//Task.jsx
import { deleteTask, updateTask } from "../../utilities/api";
import { useState } from "react";
// import "./Task.css";

function Task({ task, index, setTaskArray }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  // UI + DB delete
  const handleDelete = async () => {
    try {
      await deleteTask(task._id);

      setTaskArray((lastVal) => {
        return lastVal.filter((t) => t._id !== task._id);
      });
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // UI + DB update
  const saveTask = async () => {
    try {
      const updatedData = { title: editValue };

      const updatedTask = await updateTask(task._id, updatedData);

      setTaskArray((lastVal) => {
        const newArray = [...lastVal];
        newArray[index] = { ...task, title: editValue };
        return newArray;
      });

      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
    }
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
          <span>{task.title}</span>
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

        <button className="btn-delete" onClick={handleDelete}>
         DELETE 
        </button>
      </div>
    </div>
  );
}

export { Task };

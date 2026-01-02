//Task.jsx
import { deleteTask, updateTask } from "../../utilities/api";
import { useState } from "react";
// import "./Task.css";

function Task({ task, index, setTaskArray }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);
  const taskId = task.taskId; 
  // UI + DB delete
  const handleDelete = async () => {
    try {
      await deleteTask(taskId);

      setTaskArray((lastVal) =>
        lastVal.filter((t) => t.taskId !== taskId)
    );

    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // UI + DB update
  const saveTask = async () => {
    try {
      const updatedData = { title: editValue };

      const res = await updateTask(taskId,updatedData);
      //  const editedTask ={
      //   title: res.title
      //  }  
        setTaskArray(prev =>
          prev.map(t =>
            t.taskId === task.taskId ? res : t
          )
        );      // setTaskArray((lastVal) => [...lastVal, editedTask]);
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

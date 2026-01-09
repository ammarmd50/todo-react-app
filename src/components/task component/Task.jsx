//Task.jsx
import { deleteTask, updateTask } from "../../utilities/api";
import { useState } from "react";
// import "./Task.css";

function Task({ task, index, setTaskArray }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const taskId = task.taskId; 
  // UI + DB delete
  const handleDelete = async () => {
    try {
      await deleteTask(taskId);

      setTaskArray((prev) =>
        prev.filter((t) => t.taskId !== taskId)
      );

    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // UI + DB update
  const saveTask = async () => {
    try {
      const updatedData = {
        title: editValue,
        description: editDescription
      };

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
            placeholder="Task Title"
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <h4>{task.title}</h4>
        )}

        {isEditing ? (
          <textarea
            className="edit-textarea"
            placeholder="Task Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            rows={2}
          />
        ) : (
          task.description && 
          <p className="task-desc">{task.description}</p>
        )}
        
        <span className="task-status">{task.status}</span>
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

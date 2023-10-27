import React from 'react'
import './index.css'


interface TaskProperty{
  createTask : () => void;
}

const WelcomePage: React.FC<TaskProperty> = ({ createTask }) => {
  
  const handleTaskAdd = () =>{
    createTask();
  }
  return (
    <div className="welcome-page">
      <div className='container mt-5'>
        <h2>Welcome to Your Task List</h2>
        <p>It looks like you don't have any tasks yet. Click the "Add task" button below to get started!</p>
        <div className='text-center' style={{marginTop: '100px'}}>
          <button className='add-task-button' onClick={handleTaskAdd}>Create Task</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage

import React, { useState } from 'react';
import Modal from '../modal/CreateTaskModal';
import { Task } from './task';

interface TaskParams {
  title: string;
  description: string;
  priority: string;
  dueDate: string;
}

export const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] =  useState<TaskParams[]>([]);
  
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () =>{
    setIsModalOpen(false);
  }

  const handleSave = (title: string, description: string, selectedPriority: string, endDate: string) => {
    const newTask: TaskParams = {
      title: title, description: description, priority: selectedPriority, dueDate: endDate
    };
    setTasks([...tasks, newTask]);
    console.log('newTask',newTask);
    console.log('all array', tasks);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 gx-5'>
          <h2>Task List</h2>
          <div className='d-flex mb-2 justify-content-between'>
            <button className='btn btn-sm btn-primary'>All</button>
            <button className='btn btn-sm btn-light'>In progress</button>
            <button className='btn btn-sm btn-light'>Completed</button>
          </div>
        </div>
        <div className='col-6 gx-5'>
          <button className='btn btn-sm btn-info float-end mb-3' onClick={openModal}>Add task</button>
          <Modal isOpen={isModalOpen} onSave={handleSave} onClose={closeModal} selectedPriority='value'/>
          <div className='form'>
            <input type="text" id="inputPassword5" placeholder='Search task' className="form-control rounded-pill" aria-describedby="passwordHelpBlock"/>
            {/* <span>
              <i className='fa fa-search float-end'></i>
            </span> */}
          </div>
        </div>
      </div>
          <div className='row'>
            <div className='col-6'>
              {tasks.map((task, index) =>(<Task key={index} data={task}/>))}
            </div>
            <div className='col-6'>             
            </div>
          </div>
          <div className='' style={{position: 'fixed', bottom: '20px', right: '20px' }}>
          <small className='float-end text-danger'>sign out</small>
          </div>           
    </div>
  );
}
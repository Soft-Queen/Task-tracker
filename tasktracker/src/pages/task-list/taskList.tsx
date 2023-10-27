import React, { useEffect, useState } from 'react';
import Modal from '../modal/CreateTask/CreateTaskModal';
import { Task } from './task';
import EditModal from '../modal/EditTask/EditTaskModal';

interface TaskParams {
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  status: string;
}

export const TaskList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] =  useState<TaskParams[]>(() => {
    const storedTasks = localStorage.getItem('allTasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);
  const [selectedBtn, setSelectedBtn] = useState('All');
  
  const [completedTasks, setCompletedTasks] = useState<TaskParams[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<TaskParams[]>([]);

  // handle changes in categories
  useEffect(() => {
    const inProgress = tasks.filter((task) => task.status === 'in progress');
    const completed = tasks.filter((task) => task.status === 'Completed');
    setInProgressTasks(inProgress);
    setCompletedTasks(completed);
  }, [selectedBtn, tasks]);

  // update localstorage
  useEffect(()=>{
    const storedTasks = localStorage.getItem('allTasks');
    console.log('incoming tasks', storedTasks);
    if (storedTasks){
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem('allTasks', JSON.stringify(tasks));
  }, [tasks]);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () =>{
    setIsModalOpen(false);
  }

  // handle task save
  const handleSave = (title: string, description: string, selectedPriority: string, endDate: string) => {
    const newTask: TaskParams = {
      title: title, description: description, priority: selectedPriority, dueDate: endDate, status: 'in progress',
    };
    setTasks([...tasks, newTask]);
    console.log('newTask',newTask);
  };
  
  const openEditModal = (taskId: number) => {
    setSelectedTaskIndex(taskId);
    setEditModalOpen(true);
  }

  // handle task deletion
  const handleRemoveTask = (taskId: number) => {
    const updateTasks = tasks.filter((task, index) => index !== taskId);
    // console.log(tasks[taskId]);
    setTasks(updateTasks);
  }

  const handleEditTask = (taskId: number) =>{
    openEditModal(taskId);
  }

  const handleEditSave = (title: string, description: string, selectedPriority: string, endDate: string) => {
    if (selectedTaskIndex !== null){
      const editedTask: TaskParams = {...tasks[selectedTaskIndex],
        title:title, description:description, priority: selectedPriority, dueDate:endDate
      };
      const updatedTasks = [...tasks];
      updatedTasks[selectedTaskIndex] = editedTask;
      setTasks(updatedTasks);
      setSelectedTaskIndex(null);
      setEditModalOpen(false);
      console.log(editedTask);
    }
  }

  const handleButtonClick = (buttonText: string) => {
    setSelectedBtn(buttonText);
  }

  const getBtnClass = (buttonText: string) => {
    return selectedBtn === buttonText ?
    'btn btn-sm btn-info text-white' : 'btn btn-sm btn-light';
  }

  const EditTaskStatus = (taskId: number) =>{
    const updatedTasks = [...tasks];
      updatedTasks[taskId].status = 'Completed';
      setTasks(updatedTasks);
  }


  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 gx-5'>
          <h2>Task List</h2>
          <div className='d-flex mb-2 justify-content-between'>
            <button onClick = {()=>handleButtonClick('All')} className={getBtnClass('All')}>All</button>
            <button onClick = {()=>handleButtonClick('In progress')} className={getBtnClass('In progress')}>In progress</button>
            <button onClick = {()=>handleButtonClick('Completed')} className={getBtnClass('Completed')}>Completed</button>
          </div>
        </div>
        <div className='col-6 gx-5'>
          <button className='btn btn-sm btn-info float-end text-white mb-3' onClick={openModal}>Add task</button>
          <Modal isOpen={isModalOpen} onSave={handleSave} onClose={closeModal} selectedPriority='value'/>
        
          <div className='form'>
            <input type="text" id="inputPassword5" placeholder='Search task' className="form-control rounded-pill" aria-describedby="passwordHelpBlock"/>
            {/* <span>
              <i className='fa fa-search float-end'></i>
            </span> */}
          </div>
          <EditModal isOpen = {editModalOpen} onSave={handleEditSave} onClose={()=>setEditModalOpen(false)}/>
        </div>
      </div>
          <div className='row d-flex flex-wrap'>
              {selectedBtn === 'All' && tasks.map((task, index)=>(<div className='col-6 col-md-6 col-sm-12' key={index}>
                  <Task data={task} onRemove={() =>handleRemoveTask(index)} onEdit={()=>handleEditTask(index)} onStatusEdit={()=> EditTaskStatus(index)} completedStatus={task.status === 'Completed'}/>
                </div>))} 
                {selectedBtn === 'In progress' && inProgressTasks.map((task, index)=>(<div className='col-6 col-md-6 col-sm-12' key={index}>
                  <Task data={task} onRemove={() =>handleRemoveTask(index)} onEdit={()=>handleEditTask(index)} onStatusEdit={()=> EditTaskStatus(index)} completedStatus={task.status === 'Completed'}/>
                </div>))}
                {selectedBtn === 'Completed' && completedTasks.map((task, index)=>(<div className='col-6 col-md-6 col-sm-12' key={index}>
                  <Task data={task} onRemove={() =>handleRemoveTask(index)} onEdit={()=>handleEditTask(index)} onStatusEdit={()=> EditTaskStatus(index)} completedStatus={task.status === 'Completed'}/>
                </div>))}      
          </div>
          <div className='' style={{position: 'fixed', bottom: '20px', right: '20px' }}>
          <small className='float-end text-danger'>sign out</small>
          </div>           
    </div>
  );
}
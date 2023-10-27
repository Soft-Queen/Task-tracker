import React, { useState } from 'react';
import './task.css'

interface TaskProps{
    data:{
        title: string;
        description: string;
        priority: string;
        dueDate: string;
        status: string;
    };
    onRemove: () => void;
    onEdit: () => void;
    onStatusEdit: ()=> void;
    completedStatus: boolean;
}

export const Task: React.FC<TaskProps> = ({data, onRemove, onEdit, onStatusEdit, completedStatus }) => {
    const [completed, setCompleted] = useState(completedStatus);
    
    const handleRemoveClick = () => {
        const shouldRemove = window.confirm("Are you sure you want to delete this task?");
        if (shouldRemove){
            onRemove();
        }
    }

    const handleEditClick = () => {
        onEdit();
    }

    const handleStatusEdit = () =>{
        if (!completed){
            const shouldComplete = window.confirm('Task completed?');
            if (shouldComplete){
                setCompleted(true);
                onStatusEdit();
            }
        }
    }

  return (
    <div className='card shadow-sm mt-4 p-3'>
        <div className='row'>
            <div className='col-8'>
                <small className=' text-muted'>{data.description}</small>
                <h4>{data.title}</h4>
            </div>
            <div className='col-4 d-flex justify-content-between'>
                <div className=''>
                    <i className='fa fa-edit p-2 rounded-circle' onClick={handleEditClick}></i>
                </div>
                <div>
                    <i className='fa fa-trash p-2 rounded-circle' onClick={handleRemoveClick}></i>
                </div>
                <div>
                    {data.status === 'Completed' ? '' : (<i className='fa fa-bell p-2 rounded-circle float-end fa-sm' style={{backgroundColor: '#FCF4C4', color:'#FCBB04'}}></i>)}
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-4'>
                <i className='fa fa-clock-o'></i>{" "}
                <small>{data.dueDate}</small>
            </div>
            <div className='col-4'>
                {((data.priority === 'high') && (<small style={{backgroundColor: '#A4C4E4', color: '#04048C'}} className='rounded-pill px-2 py-1'>{data.priority}</small>)) || ((data.priority === 'medium') && (<small style={{backgroundColor: '#DCD4FC', color: '#4F1975'}} className='rounded-pill px-2 py-1'>{data.priority}</small>)) || ((data.priority === 'low') && (<small style={{backgroundColor: '#F4E4DC', color: '#BA8930'}} className='rounded-pill px-2 py-1'>{data.priority}</small>)) }
            </div>
            <div className='col-4'>
                {completedStatus ? <small className='text-success float-end'>Completed <i className='fa fa-check'></i></small>:  <small className='float-end' style={{cursor:'pointer'}} onClick={handleStatusEdit}>Mark completed</small>}
                {/* <button className='btn btn-sm float-end' onClick={handleStatusEdit}>{completed? <span className='text-success'>Completed <i className='fa fa-check'></i></span>: 'Mark completed'}</button> */}
            </div>
        </div>
    </div>
  );
}
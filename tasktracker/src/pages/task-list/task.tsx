import React from 'react';

interface TaskProps{
    data:{
        title: string;
        description: string;
        priority: string;
        dueDate: string;
    };
    onRemove: () => void;
    onEdit: () => void;
}


export const Task: React.FC<TaskProps> = ({data, onRemove, onEdit }) => {
    const handleRemoveClick = () => {
        const shouldRemove = window.confirm("Are you sure you want to delete this task?");
        if (shouldRemove){
            onRemove();
        }
    }

    const handleEditClick = () => {
        onEdit();
    }
  return (
    <div className='card shadow-sm mt-4 p-3'>
        <div className='row'>
            <div className='col-6'>
                <small className=' text-muted'>{data.description}</small>
                <h4>{data.title}</h4>
            </div>
            <div className='col-6 d-flex justify-content-between'>
                <div className=''>
                    <i className='fa fa-edit' onClick={handleEditClick}></i>
                </div>
                <div>
                    <i className='fa fa-trash' onClick={handleRemoveClick}></i>
                </div>
                <div>
                    <i className='fa text-white fa-bell p-2 rounded-circle float-end fa-sm' style={{backgroundColor: '#fc7c04'}}></i>
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-4'>
                <i style={{color: '#9151b6'}} className='fa fa-clock-o'></i>{" "}
                <small style={{color: '#9151b6'}}>{data.dueDate}</small>
            </div>
            <div className='col-4'>
                <small style={{backgroundColor: '#CC9CF4', color: '#630D8C', paddingBottom: '2px', paddingTop: '2px'}} className='rounded-pill px-2'>{data.priority}</small>
            </div>
            <div className='col-4'>
                <button className='btn btn-sm'>Mark completed</button>
            </div>
        </div>
    </div>
  );
}
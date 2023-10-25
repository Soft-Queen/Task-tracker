import React from 'react';

interface TaskProps{
    data:{
        title: string;
        description: string;
        priority: string;
        dueDate: string;
    }
}


export const Task: React.FC<TaskProps> = ({data}) => {
  return (
    <div className='card shadow-sm mt-4 p-3'>
        <div className='row'>
            <div className='col-8'>
                <small className=' text-muted'>{data.description}</small>
                <h4>{data.title}</h4>
            </div>
            <div className='col-4'>
                <i className='fa text-white fa-bell p-2 rounded-circle float-end fa-sm' style={{backgroundColor: '#fc7c04'}}></i>
                <div className='mt-5'>
                  
                </div>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-8'>
                <i style={{color: '#9151b6'}} className='fa fa-clock-o'></i>{" "}
                <small style={{color: '#9151b6'}}>{data.dueDate}</small>
            </div>
            <div className='col-4'>
            <small style={{backgroundColor: '#CC9CF4', color: '#630D8C'}} className=' float-end rounded-pill px-2'>{data.priority}</small>
            </div>
        </div>
    </div>
  );
}
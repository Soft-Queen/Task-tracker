import React, {useState} from 'react';
import "./EditTaskModal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, description: string, selectedPriority: string, endDate: string) => void;
  selectedPriority?: string;
}
const EditModal: React.FC<ModalProps> = ({ isOpen, onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const handleSave = () =>{
    onSave(title, description, selectedPriority, endDate );
    onClose();
  }
  return isOpen ? (
    <div className='modal-overlay'>

      <div className="modal">
        <div className="modal-content">
          <h3>Edit Task</h3>
          <div className='mb-3'>
            <label htmlFor='tasktitle' className='form-label'>Task title</label>
            <input  className='form-control' type='text' placeholder='task title' id='tasktitle' onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='taskDescription'>Task Description</label>
            <textarea className='form-control' placeholder='Description' id='taskDescription' onChange={(e)=>setDescription(e.target.value)}/>
          </div>
          <div className='row mb-4'>
            <div className='col-6'>
              <select className='form-control' onChange={(e)=> setSelectedPriority(e.target.value)}>
                <option value="priority" disabled>priority</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
            <div className='col-6'>
              <input type='date' className='form-control' placeholder='Due Date' onChange={(e)=>setEndDate(e.target.value)}/>
            </div>
          </div>
          <button className='btn btn-info text-white' onClick={handleSave} disabled={title === '' || description === '' || selectedPriority === '' || endDate === ''}>save</button>
          <button className='btn btn-sm btn-info  text-white close-button' onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  ) : null;
};



export default EditModal;
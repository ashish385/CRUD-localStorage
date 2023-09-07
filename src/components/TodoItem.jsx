import React from 'react'

const TodoItem = ({ formdata, onEditClick, onDeleteClick }) => {
  return (
    <>
      <div className="flex flex-row border bg-slate-50 rounded-md">
        <div className="py-2 w-1/2 text-center">{formdata.title}</div>
        <div className="py-2 w-1/2 text-center border-l">{formdata.desc}</div>
        <div className="py-2 w-1/2 text-center border-l flex flex-row justify-center gap-5">
          <button
            className="btn btn-info"
            onClick={() => onEditClick(formdata)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(formdata.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem

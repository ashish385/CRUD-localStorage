import React from "react";

const EditForm = ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  console.log("edit", currentTodo);
  return (
    <div>
      <div className="w-11/12 flex justify-center mx-auto">
        <div className="w-1/2 border mt-5 rounded-lg px-5 shadow-md">
          <h1 className="text-center font-bold text-2xl py-4">Create Task </h1>
          <div className="py-12 w-full">
            <form onSubmit={onEditFormSubmit}>
              <label htmlFor="todo" className="flex gap-8 w-full">
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  placeholder="Create new task"
                  value={currentTodo?.title}
                  onChange={onEditInputChange}
                />
              </label>
              <label htmlFor="desc" className="flex gap-8 w-full mt-3">
                <input
                  className="form-control"
                  name="desc"
                  type="text"
                  placeholder="Add description"
                  value={currentTodo.desc}
                  onChange={onEditInputChange}
                />
              </label>
              <div className="flex">
                <button
                  className="px-4 py-2 border text-center rounded-md bg-green-800 text-white hover:bg-green-900"
                  type="submit"
                  onClick={onEditFormSubmit}
                >
                  Update
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;

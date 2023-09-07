import React from "react";

const AddTodoForm = ({ formdata, onAddFormSubmit, onAddInputChange }) => {
    // console.log(formdata);
  return (
    <div>
      <div className="w-11/12 flex justify-center mx-auto">
        <div className="w-1/2 border mt-5 rounded-lg px-5 shadow-md">
          <h1 className="text-center font-bold text-2xl py-2">Create Task </h1>
          <div className="py-12 w-full">
            <form onSubmit={onAddFormSubmit}>
              <label htmlFor="todo" className="flex gap-8 w-full">
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  placeholder="Create new task"
                  value={formdata.title}
                  onChange={onAddInputChange}
                />
              </label>
              <label htmlFor="desc" className="flex gap-8 w-full mt-3">
                <input
                  className="form-control"
                  name="desc"
                  type="text"
                  placeholder="Add description"
                  value={formdata.desc}
                  onChange={onAddInputChange}
                />
              </label>
              <button
                type="submit"
                className="px-4 py-2 mt-3 border text-center rounded-md bg-green-800 text-white hover:bg-green-900"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <h2>Create todo:</h2>
              <form className="form-inline" onSubmit={onAddFormSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="todo"
                    type="text"
                    placeholder="Create new todo"
                    value={todo}
                    onChange={onAddInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-default btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AddTodoForm;

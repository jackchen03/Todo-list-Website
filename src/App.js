import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid"
import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";
import { func } from "prop-types";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);
  function addTask(name){
    const newtask = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newtask]);
  }

  function deleteTask(id){
    const updatedTask = tasks.filter(task => id !== task.id);
    setTasks(updatedTask);
  }

  function editTask(id, newName){
    const updatedTask = tasks.map(task => {
      if (id == task.id){
        return {...task, name: newName};
      }
      return task;
    });
    setTasks(updatedTask);
  }

  function toggleCompleted(id){
    const updatedTask = tasks.map(task => {
      if (id == task.id) {
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTask);
  }
  
  const filterList = FILTER_NAMES.map(name =>(
      <FilterButton 
        key={name} 
        name={name} 
        isPressed={name===filter}
        setFilter={setFilter}
      />
    )
  );
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
      <Todo 
        name={task.name} 
        completed={task.completed}
        id={task.id}
        key={task.id}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    )
  );
  
  const taskNoun = tasks.length > 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${taskNoun} remaining`;

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;

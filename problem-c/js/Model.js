'use strict';

import {default as initialTasks} from './task-data.js';


let currentTaskList = initialTasks.map((task, index) => ({
  ...task,
  id: index + 1
}));


function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === 'incomplete');
}
export {getIncompleteTasks};


function addTask(description) {
  let newTask = {
    description,
    status: "incomplete",
    id: currentTaskList.length + 1
  };
  currentTaskList = [...currentTaskList, newTask];
}

export {addTask};

function markComplete(id) {
  let updatedTaskList = currentTaskList.map(task => {
    if (task.id === id) {
      return {...task, status: "complete"}
    }
    return task;
  });
  currentTaskList = updatedTaskList;
}

export {markComplete};
'use strict';

import {default as initialTasks} from './task-data.js';


let currentTaskList = initialTasks.map((task, index) => {
  task = {id: index + 1, ...task}
  return task;
});


function getIncompleteTasks() {
  let incompleteTasks = currentTaskList.filter(task => task.status === 'incomplete');
  return incompleteTasks;
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

export function markComplete(id) {
  let updatedTaskList = currentTaskList.map(task => {
      let tasks = {...task};
    if (tasks.id === id) {
      tasks.status = 'complete';
    }
    return tasks;
  }) 

currentTaskList = updatedTaskList;
}
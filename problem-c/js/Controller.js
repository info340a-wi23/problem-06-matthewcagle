'use strict';
import * as model from './Model.js';
import { renderTaskList } from "./View";

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskList(markCompleteCallback);
}

export function renderTaskView() {
    let tasksRoot = document.querySelector("#tasks-root");
    tasksRoot.innerHTML = "";

    let taskListElement = renderTaskList(markCompleteCallback);
    tasksRoot.append(taskListElement);
}


let addTaskButton = document.querySelector('#add-task-button');
addTaskButton.addEventListener('click', () => {
  let input = document.querySelector('#task-input');
  let value = input.value.trim();
  if (!value) {
    return;
  }
  model.addTask(value);
  input.value = '';
  renderTaskView();
});
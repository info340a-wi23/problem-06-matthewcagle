'use strict';
import * as model from './Model.js';
import { renderTaskList } from "./View.js";

function markCompleteCallback(task) {
  model.markComplete(task.id);
  renderTaskView();
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
  if (value !== '') {
    model.addTask(value);
    input.value = '';
    renderTaskView();
  }
});
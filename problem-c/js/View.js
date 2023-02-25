'use strict';

import { getIncompleteTasks } from "./Model.js";


function renderSingleTask(task, markCompleteCallback) {
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = ` ${task.description}`;

  let button = document.createElement('button');
  button.classList.add('btn', 'btn-sm', 'btn-warning');
  button.innerHTML = '<span class="material-icons-outlined">done</span>';

  button.addEventListener('click', () => {
    markCompleteCallback(task);
  });

  li.prepend(button);
  
  return li;
}



function renderTaskList(markCompleteCallback) {
  let incompleteTasks = getIncompleteTasks();
  let ul = document.createElement('ul');
  ul.classList.add('list-group', 'list-group-flush');

  if (incompleteTasks.length === 0) {
    let div = document.createElement('div');
    div.textContent = 'None!';
    return div;
  }

  incompleteTasks.forEach((task) => {
    let li = renderSingleTask(task, markCompleteCallback);
    ul.append(li);
  });
  
  return ul;
}


export {renderTaskList};
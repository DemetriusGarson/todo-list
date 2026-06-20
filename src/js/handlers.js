import { nanoid } from 'nanoid';
import { refs } from './refs';
import { renderTask, renderTasks } from './renderTasks';
import { deleteTask, getTasks, initTasks, saveTask } from './localStorageApi';

export function onTaskFormSubmit(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    alert('!!!!!!!!!!!!!!');
    return;
  }

  const task = {
    name: taskNameValue,
    description: taskDescriptionValue,
    id: nanoid(),
  };
  renderTask(task);
  saveTask(task);
  event.target.reset();
}

export function initHomePage(event) {
  initTasks();
  const tasks = getTasks();
  renderTasks(tasks);
}

export function onDeleteButtonClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const taskId = event.target.dataset.id;
  deleteTask(taskId);
  const tasks = getTasks();
  renderTasks(tasks);
}

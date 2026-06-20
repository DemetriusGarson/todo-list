import { nanoid } from 'nanoid';
import { refs } from './refs';
import {
  renderTask,
  renderTaskInputModal,
  renderTaskModal,
  renderTasks,
} from './renderTasks';
import {
  deleteTask,
  getTasks,
  initTasks,
  saveTask,
  saveTasks,
} from './localStorageApi';

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
  if (
    event.target.nodeName !== 'BUTTON' ||
    !event.target.classList.contains('task-list-delete-btn')
  ) {
    return;
  }
  // const taskId = event.target.dataset.id;
  const taskId = event.target.closest('.task-list-item').dataset.id;
  deleteTask(taskId);
  const tasks = getTasks();
  renderTasks(tasks);
}

export function onEditButtonClick(event) {
  if (
    event.target.nodeName !== 'BUTTON' ||
    !event.target.classList.contains('task-list-edit-btn')
  ) {
    return;
  }
  const taskId = event.target.closest('.task-list-item').dataset.id;
  const tasks = getTasks();
  const editingTask = tasks.filter(task => task.id === taskId)[0];
  console.log(editingTask);
  refs.overlayWindow.classList.toggle('open');
  renderTaskModal(editingTask);
  renderTaskInputModal(editingTask);

  refs.taskFormModal = document.querySelector('.task-form-modal');
}

export function onInputModalSaveButtonClick(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  const taskNameValue = taskName.value.trim();
  const taskDescriptionValue = taskDescription.value.trim();
  if (!taskNameValue || !taskDescriptionValue) {
    alert('!!!!!!!!!!!!!!');
    return;
  }
  const changedTask = {
    name: taskNameValue,
    description: taskDescriptionValue,
    id: event.target.dataset.id,
  };

  const id = event.target.dataset.id;

  const tasks = getTasks();

  const newTasks = tasks.map(task => {
    if (task.id === id) {
      console.log(id);
      return changedTask;
    } else {
      return task;
    }
  });

  saveTasks(newTasks);
  renderTasks(newTasks);
  refs.overlayWindow.classList.toggle('open');
}

export function onCloseButtonClick(event) {
  if (event.target === refs.closeOverlayBtn) {
    refs.overlayWindow.classList.toggle('open');
  }
}

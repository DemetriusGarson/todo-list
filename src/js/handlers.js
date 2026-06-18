import { nanoid } from 'nanoid';
import { refs } from './refs';
import { renderTask } from './renderTasks';

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
  event.target.reset();

  console.log(taskNameValue);
  console.log(taskDescriptionValue);
  console.log(task);
}

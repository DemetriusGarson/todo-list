import { refs } from './refs';

export function renderTask({ name, description, id }) {
  const markup = `<li class='task-list-item'>
    <h3 class="task-list-title">${name}</h3>
    <p class="task-list-description">${description}</p>
    <button class="task-list-delete-btn" data-id="${id}" type="button">Delete</button>
</li>`;
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

export function renderTasks(tasks) {
  const tasksMarkup = tasks
    .map(({ name, description, id }) => {
      return `<li class='task-list-item'>
    <h3 class="task-list-title">${name}</h3>
    <p class="task-list-description">${description}</p>
    <button class="task-list-delete-btn" data-id="${id}" type="button">Delete</button>
</li>`;
    })
    .join('');
  refs.taskList.innerHTML = tasksMarkup;
}

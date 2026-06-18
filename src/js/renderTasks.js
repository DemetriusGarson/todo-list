import { refs } from './refs';

export function renderTask({ name, description }) {
  const markup = `<li class='task-list-item'>
    <h3 class="task-list-title">${name}</h3>
    <p class="task-list-description">${description}</p>
    <button class="task-list-delete-btn" type="button">Delete</button>
</li>`;
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

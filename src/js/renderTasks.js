import { refs } from './refs';

export function renderTask({ name, description, id }) {
  const markup = `<li class='task-list-item' data-id ="${id}">
    <h3 class="task-list-title">${name}</h3>
    <p class="task-list-description">${description}</p>
    <button class="task-list-edit-btn" type="button">Edit</button>
    <button class="task-list-delete-btn" type="button">Delete</button>
    
</li>`;
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

export function renderTasks(tasks) {
  const tasksMarkup = tasks
    .map(({ name, description, id }) => {
      return `<li class='task-list-item' data-id ="${id}">
    <h3 class="task-list-title">${name}</h3>
    <p class="task-list-description">${description}</p>
    <button class="task-list-edit-btn" type="button">Edit</button>
    <button class="task-list-delete-btn" type="button">Delete</button>
    
</li>`;
    })
    .join('');
  refs.taskList.innerHTML = tasksMarkup;
}

export function renderTaskModal({ name, description, id }) {
  const markup = `<li class='task-list-item' data-id ="${id}">
    <h3 class="task-list-title">${name}</h3>
    <p class="task-list-description">${description}</p>
    <button class="task-list-save-btn" type="button">Save</button>
    <button class="task-list-delete-btn" type="button">Delete</button>
    
</li>`;
  refs.modalWindow.innerHTML = markup;
}

export function renderTaskInputModal({ name, description, id }) {
  const markup = `<form class="task-form-modal" data-id ="${id}">
  <input
    class="task-name"
    type="text"
    name="taskName"
    value="${name}"
  />
  <textarea
    name="taskDescription"
  >${description}</textarea>
  <button class="task-input-modal-save-btn" type="submit">Save Task</button>
</form>`;
  refs.modalWindow.insertAdjacentHTML('beforeend', markup);
}

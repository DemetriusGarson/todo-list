import {
  initHomePage,
  onDeleteButtonClick,
  onTaskFormSubmit,
} from './js/handlers.js';
import { refs } from './js/refs.js';

document.addEventListener('DOMContentLoaded', initHomePage);

refs.taskForm.addEventListener('submit', onTaskFormSubmit);

refs.taskList.addEventListener('click', onDeleteButtonClick);

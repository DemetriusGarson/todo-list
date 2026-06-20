import {
  initHomePage,
  onCloseButtonClick,
  onDeleteButtonClick,
  onEditButtonClick,
  onInputModalSaveButtonClick,
  onTaskFormSubmit,
} from './js/handlers.js';
import { refs } from './js/refs.js';

document.addEventListener('DOMContentLoaded', initHomePage);

refs.taskForm.addEventListener('submit', onTaskFormSubmit);

refs.taskList.addEventListener('click', onDeleteButtonClick);

refs.taskList.addEventListener('click', onEditButtonClick);

refs.overlayWindow.addEventListener('click', onCloseButtonClick);

refs.modalWindow.addEventListener('submit', onInputModalSaveButtonClick);

// console.log(refs.taskFormModal);

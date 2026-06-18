import { onTaskFormSubmit } from './js/handlers.js';
import { refs } from './js/refs.js';

refs.taskForm.addEventListener('submit', onTaskFormSubmit);

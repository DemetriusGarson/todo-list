import { STORAGE_KEYS } from './constans';

export function getTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS));
  } catch (error) {
    console.log('помилка читання тасок з localStorage');
  }
}

export function initTasks() {
  const tasks = getTasks() ?? [];
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

export function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

export function deleteTask(id) {
  const tasks = getTasks();
  const filteredTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(filteredTasks));
}

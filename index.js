import{n as m}from"./assets/vendor-BY9c7rfI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const i={taskForm:document.querySelector(".task-form"),taskList:document.querySelector("#task-list"),deleteBtn:document.querySelector(".task-list-delete-btn"),overlayWindow:document.querySelector(".overlay"),closeOverlayBtn:document.querySelector(".overlay-close-button"),modalWindow:document.querySelector(".modal-window")};function f({name:t,description:e,id:n}){const a=`<li class='task-list-item' data-id ="${n}">
    <h3 class="task-list-title">${t}</h3>
    <p class="task-list-description">${e}</p>
    <button class="task-list-edit-btn" type="button">Edit</button>
    <button class="task-list-delete-btn" type="button">Delete</button>
    
</li>`;i.taskList.insertAdjacentHTML("beforeend",a)}function d(t){const e=t.map(({name:n,description:a,id:s})=>`<li class='task-list-item' data-id ="${s}">
    <h3 class="task-list-title">${n}</h3>
    <p class="task-list-description">${a}</p>
    <button class="task-list-edit-btn" type="button">Edit</button>
    <button class="task-list-delete-btn" type="button">Delete</button>
    
</li>`).join("");i.taskList.innerHTML=e}function p({name:t,description:e,id:n}){const a=`<li class='task-list-item' data-id ="${n}">
    <h3 class="task-list-title">${t}</h3>
    <p class="task-list-description">${e}</p>
    <button class="task-list-save-btn" type="button">Save</button>
    <button class="task-list-delete-btn" type="button">Delete</button>
    
</li>`;i.modalWindow.innerHTML=a}function g({name:t,description:e,id:n}){const a=`<form class="task-form-modal" data-id ="${n}">
  <input
    class="task-name"
    type="text"
    name="taskName"
    value="${t}"
  />
  <textarea
    name="taskDescription"
  >${e}</textarea>
  <button class="task-input-modal-save-btn" type="submit">Save Task</button>
</form>`;i.modalWindow.insertAdjacentHTML("beforeend",a)}const c={TASKS:"tasks",THEME:""};function r(){try{return JSON.parse(localStorage.getItem(c.TASKS))}catch{console.log("помилка читання тасок з localStorage")}}function b(){const t=r()??[];localStorage.setItem(c.TASKS,JSON.stringify(t))}function y(t){const e=r();e.push(t),localStorage.setItem(c.TASKS,JSON.stringify(e))}function S(t){localStorage.setItem(c.TASKS,JSON.stringify(t))}function T(t){const n=r().filter(a=>a.id!==t);localStorage.setItem(c.TASKS,JSON.stringify(n))}function L(t){t.preventDefault();const{taskName:e,taskDescription:n}=t.target.elements,a=e.value.trim(),s=n.value.trim();if(!a||!s){alert("!!!!!!!!!!!!!!");return}const o={name:a,description:s,id:m()};f(o),y(o),t.target.reset()}function v(t){b();const e=r();d(e)}function N(t){if(t.target.nodeName!=="BUTTON"||!t.target.classList.contains("task-list-delete-btn"))return;const e=t.target.closest(".task-list-item").dataset.id;T(e);const n=r();d(n)}function O(t){if(t.target.nodeName!=="BUTTON"||!t.target.classList.contains("task-list-edit-btn"))return;const e=t.target.closest(".task-list-item").dataset.id,a=r().filter(s=>s.id===e)[0];console.log(a),i.overlayWindow.classList.toggle("open"),p(a),g(a),i.taskFormModal=document.querySelector(".task-form-modal")}function h(t){t.preventDefault();const{taskName:e,taskDescription:n}=t.target.elements,a=e.value.trim(),s=n.value.trim();if(!a||!s){alert("!!!!!!!!!!!!!!");return}const o={name:a,description:s,id:t.target.dataset.id},l=t.target.dataset.id,u=r().map(k=>k.id===l?(console.log(l),o):k);S(u),d(u),i.overlayWindow.classList.toggle("open")}function E(t){t.target===i.closeOverlayBtn&&i.overlayWindow.classList.toggle("open")}document.addEventListener("DOMContentLoaded",v);i.taskForm.addEventListener("submit",L);i.taskList.addEventListener("click",N);i.taskList.addEventListener("click",O);i.overlayWindow.addEventListener("click",E);i.modalWindow.addEventListener("submit",h);
//# sourceMappingURL=index.js.map

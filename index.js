import"./assets/styles-CgLylo3T.js";//! TASK1
//! TASK2
//! TASK3
//! module 10_2
//! TASK4
//! TASK5
//! TASK6
//! TASK7
//! TASK8
//! TASK9
//! TASK10
//!!!!!!!!!! variant4
const n=Promise.resolve(5),c=Promise.resolve("r32r32"),i=Promise.resolve({key1:"13e213"});function l(e){const t=[],s=[];for(const r of e)r.then(o=>{t.push(o)}).catch(o=>s.push(o));return new Promise((r,o)=>{setTimeout(()=>{s[0]===void 0?r(t):o(s[0])},0)})}l([n,c,i]).then(e=>console.log(e)).catch(e=>console.log(e));
//# sourceMappingURL=index.js.map

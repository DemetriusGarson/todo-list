const refs = {
  clockSpan: document.querySelector('.clock'),
  loadBtn: document.querySelector('.load-btn'),
  loader: document.querySelector('.loader'),
  output: document.querySelector('.output'),
  input: document.querySelector('.birthday'),
  birthdayOutput: document.querySelector('.birthday-output'),
  birthdayForm: document.querySelector('.birthday-form'),
};

updateClock();
const clockId = setInterval(updateClock, 1000);
const user = {
  user: 'Alex',
  role: 'Frontend Developer',
  status: 'Active',
};

refs.loadBtn.addEventListener('click', onLoadBtnClick);

refs.birthdayForm.addEventListener('submit', onBirthdayFormSubmit);

function updateClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, 0);
  const minutes = String(time.getMinutes()).padStart(2, 0);
  const seconds = String(time.getSeconds()).padStart(2, 0);

  refs.clockSpan.textContent = `${hours}:${minutes}:${seconds}`;
}

function onLoadBtnClick(event) {
  refs.output.innerHTML = '';
  showLoader();
  setTimeout(showUser, 3000, user);
}

function showUser(user) {
  hideLoader();
  const markup = `<p>${user.user}</p><p>${user.role}</p><p>${user.status}</p>`;
  refs.output.innerHTML = markup;
}

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

// Функціонал:
// користувач вводить дату народження (YYYY-MM-DD)
// ти показуєш:
// вік
// скільки днів до наступного дня народження
// 📌 Приклад:
// Age: 25
// Days to birthday: 120

function onBirthdayFormSubmit(event) {
  event.preventDefault();
  let inputValue = refs.input.value.trim();
  if (!inputValue) {
    refs.birthdayOutput.innerHTML = 'Enter Birthday Date';
    return;
  }

  const today = new Date();
  const birthday = new Date(inputValue);
  console.log(today);
  console.log(birthday);
  let nextBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  console.log(nextBirthday);

  const age = today.getFullYear() - birthday.getFullYear();
  console.log(age);
  const diference = nextBirthday - today;
  const days = Math.ceil(diference / (1000 * 60 * 60 * 24));
  console.log(days);
  const markup = `<p>Age: ${age}</p><p>Days to Birthday: ${days}</p>`;
  refs.birthdayOutput.innerHTML = markup;
}

// 2026-05-25

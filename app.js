// 0Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', ()=>{

  setTimeout(()=>{
    preloader.classList.add('hide');

    setTimeout(()=>{
      preloader.style.display = 'none';
      preloader.style.zIndex = '0';
    },1000)
  }, 1001)

})


// VARS

// Defaults
const themeCheck = document.getElementById('themeCheck');
const contextMenuNote = document.getElementById('contextMenuNote');
const deleteNoteOpt = document.getElementById('deleteNote')

// Intro
const introArea = document.getElementById('introContentArea');
const introIntro = document.getElementById('introIntro');
const introName = document.getElementById('introName');
const introHey = document.getElementById('introHey');
const notif = document.getElementById('notif');
const notifText = document.getElementById('notifText');
const nameAccCircle = document.getElementById('nameAccCircle');
const nameIntroInput = document.getElementById('nameIntroInput');
const nameIntroHey = document.getElementById('nameIntroHey');
const welcomeBack = document.getElementById('welcomeBack');
const welcomeBackName = document.getElementById('welcomeBackName');
const mainBoard = document.getElementById('mainBoard');


// Settings
const cloud = document.getElementById('cloud');
const moon = document.getElementById('moon');
const nameSettingInput = document.getElementById('nameSettingInput');
const setAccCircle = document.getElementById('setAccCircle');
const currencySetting = document.getElementById('currencySetting');
const backCircleSetting = document.getElementById('backCircleSetting');
const settingsBoard = document.getElementById('settingsBoard');
const settingDashboardGear = document.getElementById('settingDashboardGear');
const settingDashboardDate = document.getElementById('settingDashboardDate');
const SDTNTime = document.getElementById('SDTNTime');
const SDTNName = document.getElementById('SDTNName');


// Todo
const todoBoard = document.getElementById('todoBoard');
const plusTodo = document.getElementById('plusTodo');
const plusTodoBoard = document.getElementById('plusTodoBoard');
const exitFsTodo = document.getElementById('exitFsTodo');
const todoContentDash = document.getElementById('todoContentDash');
const todoContentBoard = document.getElementById('todoContentBoard');


// Note
const noteBoard = document.getElementById('noteBoard');
const plusNote = document.getElementById('plusNote');
const plusNoteBoard = document.getElementById('plusNoteBoard')
const exitFsNote = document.getElementById('exitFsNote');
const noteListCon = document.getElementById('noteListCon');
const noteListConBoard = document.getElementById('noteListConBoard');
const noteMainCon = document.getElementById('noteMainCon');
const noteMainHeaderDash = document.getElementById('noteMainHeaderDash');
const noteMainBodyDash = document.getElementById('noteMainBodyDash');
const noteMainHeaderBoard = document.getElementById('noteMainHeaderBoard');
const noteMainBodyBoard = document.getElementById('noteMainBodyBoard');


// Expense
const expenseBoard = document.getElementById('expenseBoard');
const plusLog = document.getElementById('plusLog');
const plusLogBoard = document.getElementById('plusLogBoard');
const exitFsLog = document.getElementById('exitFsLog');
const walletConDashboard = document.getElementById('walletConDashboard');
const walletConBoard = document.getElementById('walletConBoard');
const transLogMainConBoard = document.getElementById('transLogMainConBoard');
const totalWalletAmount = document.getElementById('totalWalletAmountBoard');
const totalWalletAmountDb = document.getElementById('totalWalletAmountDb');
const contextMenuLog = document.getElementById('contextMenuLog');


// Todoadd Board
const todoAddBoard = document.getElementById('todoAddBoard');
const backCircleTodoAdd = document.getElementById('backCircleTodoAdd');
const taskTitleAddInput = document.getElementById('taskTitleAddInput');
const taskDateAddInput = document.getElementById('taskDateAddInput');
const taskAddConfirmBtn = document.getElementById('taskAddConfirmBtn');


// Expenseadd Board
const expenseAddBoard = document.getElementById('expenseAddBoard');
const backCircleExpenseAdd = document.getElementById('backCircleExpenseAdd');
const expenseAddTransactionForm = document.getElementById('expenseAddTransactionForm');
const EATCTitle = document.getElementById('EATCTitle');
const EATCAmount = document.getElementById('EATCAmount');
const EATCWallet = document.getElementById('EATCWallet');
const EATCIOE = document.getElementById('EATCIOE');
const EATCButton = document.getElementById('EATCButton');
const EAWCName = document.getElementById('EAWCName');
const EAWCAmount = document.getElementById('EAWCAmount');
const EAWCButton = document.getElementById('EAWCButton');
const showMoneyLog = document.getElementById('showMoneyLog');
const showMoney = document.getElementById('showMoney');

// Dashboard
const dashboard = document.getElementById('dashboard');
const fsTodo = document.getElementById('fsTodo');
const fsNote = document.getElementById('fsNote');
const fsLog = document.getElementById('fsLog');

// localStorage.setItem('name', null);
// localStorage.setItem('transactionsLS', null);
// localStorage.setItem('walletsLS', null);
// localStorage.setItem('totalWalletAmountJSLS', 0);

let name = '';
let totalWalletAmountJS = 0;
let tasks = [];
let notes = [];
let wallets = [];
let transactions = [];

function dataLoad(){
  if (localStorage.getItem('theme') === 'dark'){
    themeCheck.checked = true;
  } else {
    document.body.classList.add('lightTheme');
  }

  if (localStorage.getItem('name') === null) {
    iaIntro();
    setTimeout(iaName, 4000);
  } else {
    name = localStorage.getItem('name');
    SDTNName.innerText = `${name}'s Dashboard`
    welBack();


    // Todo
    const tasksFromLs = JSON.parse(localStorage.getItem('tasks'));

    if (tasksFromLs === null){
      tasks = [];
    } else if (tasksFromLs !== null){
      tasks = tasksFromLs;
      updateDomTodo();
      updateBoardTodo();
    }


    // Note
    const notesFromLs = JSON.parse(localStorage.getItem('notes'));
    if (notesFromLs === null){
      notes = [];
    } else if (notesFromLs !== null){
      notes = notesFromLs;
      updateDomNoteDash();
      updateDomNoteBoard();
    }


    if (notes.length === 0){
      noteMainBodyDash.contentEditable = 'false';
      noteMainHeaderDash.contentEditable = 'false';
    } else {
      noteMainBodyDash.contentEditable = 'true';
      noteMainHeaderDash.contentEditable = 'true';
    }


    // Log
    const totalFromLs = JSON.parse(localStorage.getItem('totalWalletAmountJSLS'));

    if (totalFromLs === null){
      totalWalletAmountJS = 0;
    } else if (totalFromLs !== null){
      totalWalletAmountJS = totalFromLs;
    }

    const walletsFromLs = JSON.parse(localStorage.getItem('walletsLS'));
    
    if (walletsFromLs === null){
      wallets = [];
    } else if (walletsFromLs !== null){
      wallets = walletsFromLs;
      updateWalletOptions();
    }

    const transactionsFromLs = JSON.parse(localStorage.getItem('transactionsLS'));

    if (transactionsFromLs === null){
      transactions = [];
    } else if (transactionsFromLs !== null){
      transactions = transactionsFromLs;
    }

    updateDomWalletDash();
    updateDomWalletBoard();
    updateDomExpenseBoard();

  }
}
dataLoad();

// Color Theme
// Set initial Theme
cloud.addEventListener('click', ()=>{
  if (themeCheck.checked === false){
    themeCheck.checked = true;
    switchTheme();
  } else {
    themeCheck.checked = false;
    switchTheme();
  }
})

moon.addEventListener('click', ()=>{
  if (themeCheck.checked === false){
    themeCheck.checked = true;
    switchTheme();
  } else {
    themeCheck.checked = false;
    switchTheme();
  }
})


function themeChosen(){
  let theme = '';

  if (localStorage.getItem('theme') === ''){
    if (window.matchMedia("(prefers-color-scheme: dark").matches){
      theme = 'dark';
    } else {
      theme = 'light';
    }
  } else if (localStorage.getItem('theme') === 'dark'){
    theme = 'dark';
  } else if (localStorage.getItem('theme') === 'light') {
    theme = 'light'
  }

  if (theme === 'dark'){
    document.body.classList.add('darkTheme');
  }

  localStorage.setItem('theme', theme);
}
themeChosen();


function switchTheme(){
  if (themeCheck.checked === true){
    theme = 'dark';
  } else if (themeCheck.checked === false){
    theme = 'light';
  }

  if (theme === 'dark'){
    if (document.body.classList.contains('lightTheme')){
      document.body.classList.remove('lightTheme');
      document.body.classList.add('darkTheme');
    }
  } else if (theme === 'light'){
    if (document.body.classList.contains('darkTheme')){
      document.body.classList.remove('darkTheme');
      document.body.classList.add('lightTheme');
    }
  }

  localStorage.setItem('theme', theme);
  themeChosen();
}

themeCheck.addEventListener('change', switchTheme);





// Main

// Intros
function iaIntro(){

  introIntro.style.display = 'flex';
  introIntro.style.opacity = '100%';

  setTimeout(()=>{
    introIntro.style.opacity = '0%';
    setTimeout(()=>{
      introIntro.style.display = 'none';
    }, 601);
  }, 3000);

}

function iaName(){
  introName.style.display = 'flex';
  introName.style.zIndex = '1';  
  setTimeout(()=>{
    introName.style.opacity = '100%';
  }, 1);
}

function welBack(){
  mainBoard.style.display = 'flex';
  name = localStorage.getItem('name');
  welcomeBackName.innerText = `${name}`
  welcomeBack.style.display = 'flex';
  welcomeBack.style.opacity = '100%';

  setTimeout(()=>{
    welcomeBack.style.opacity = '0';
    mainBoard.style.opacity = '0';
    setTimeout(()=>{
      welcomeBack.style.display = 'none';

      setTimeout(() => {
        dashboard.style.display = 'flex';

        setTimeout(() => {
          dashboard.style.opacity = '1';
          dashboard.style.zIndex = '1';
        }, 304);
      }, 303);
    }, 302);
  }, 3001);
}


function nameEntryFunc(){
  if (nameIntroInput.value === ''){
    notifText.innerText = 'Enter a Name!';
    notif.classList.add('show');

    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500)
  } else {
    name = nameIntroInput.value;
    SDTNName.innerText = `${nameIntroInput.value}'s Dashboard`;

    setTimeout(()=>{
      introName.style.opacity = '0%';
      setTimeout(()=>{
        introName.style.display = 'none';
        introName.style.zIndex = '0';

        setTimeout(()=>{
          introHey.style.display = 'flex';
          nameIntroHey.innerText = name;

          setTimeout(()=>{
            introHey.style.opacity = '100%';

            setTimeout(()=>{
              introHey.style.opacity = '0%';
              mainBoard.style.opacity = '0%';

              setTimeout(()=>{
                introHey.style.display = 'none';

                setTimeout(() => {
                  dashboard.style.display = 'flex';

                  setTimeout(() => {
                    dashboard.style.opacity = '1';
                    dashboard.style.zIndex = '1';
                  }, 602)
                }, 1)
              }, 601);
            }, 3000);
          }, 601);
        }, 1);
      }, 601);
    }, 1);
  }

  localStorage.setItem('name', name);
}


nameAccCircle.addEventListener('click', nameEntryFunc);






// Settings
setAccCircle.addEventListener('click', ()=>{
  
    if (nameSettingInput.value === ''){
      notifText.innerText = 'Enter a Name!';
      notif.classList.add('show');

      setTimeout(()=>{
        notif.classList.remove('show');
      }, 1500);
    } else if (nameSettingInput.value !== '') {
      name = nameSettingInput.value;
      localStorage.setItem('name', name);
      SDTNName.innerText = `${name}'s Dashboard`

      notifText.innerText = 'Success!';
      notif.classList.add('show');

      setTimeout(()=>{
        notif.classList.remove('show');
      }, 1500);
    }
})

backCircleSetting.addEventListener('click', ()=>{
  settingsBoard.style.opacity = '0%';

  setTimeout(()=>{
    settingsBoard.style.display = 'none';
    dashboard.style.display = 'flex';
    dashboard.style.zIndex = '1';

    setTimeout(()=>{
      dashboard.style.opacity = '1';
    }, 302)
  }, 301);
})

settingDashboardGear.addEventListener('click', ()=>{
  dashboard.style.opacity = '0';
  nameSettingInput.value = name;

  setTimeout(() => {
    dashboard.style.display = 'none';
    dashboard.style.zIndex = '0';
    settingsBoard.style.display = 'flex';

    setTimeout(() => {
      settingsBoard.style.opacity = '1';
    }, 302)
  }, 301)
})


function monthConverter(monthNum){
  switch (monthNum) {
    case 1:
      return "Jan"
    case 2:
      return "Feb"
    case 3:
      return "Mar"
    case 4:
      return "Apr"
    case 5:
      return "May"
    case 6:
      return "Jun"
    case 7:
      return "Jul"
    case 8:
      return "Aug"
    case 9:
      return "Sep"
    case 10:
      return "Oct"
    case 11:
      return "Nov"
    case 12:
      return "Dec"
  }
}

function dayConverter(dayNum){
  switch (dayNum) {
    case 1:
      return "Monday"
    case 2:
      return "Tuesday"
    case 3:
      return "Wednesday"
    case 4:
      return "Thursday"
    case 5:
      return "Friday"
    case 6:
      return "Saturday"
    case 0:
      return "Sunday"
  }
}

function minuteConverter(minuteNum){
  if (minuteNum >= 0 && minuteNum <= 9){
    return `0${minuteNum}`;
  } else {
    return minuteNum;
  }
}

function timeUpdate(){
  let date = new Date;
  SDTNTime.innerHTML = `${date.getHours()}:${minuteConverter(date.getMinutes())}`

  settingDashboardDate.innerHTML = `
  <p>${dayConverter(date.getDay())}</p>
  <p class="SDDDateAndMonth">${date.getDate()} ${monthConverter(date.getMonth())}</p>
  <p>${date.getFullYear()}</p>
  `
}

setInterval(timeUpdate, 1000);






// To-Do List

// Navigation
plusTodo.addEventListener('click', ()=>{
  dashboard.style.opacity = '0';

  setTimeout(() => {
    dashboard.style.display = 'none';
    dashboard.style.zIndex = '0';

    setTimeout(()=>{
      todoAddBoard.style.display = 'flex';
      setTimeout(() => {
        todoAddBoard.style.opacity = '1';
      }, 5)
    }, 306)
  }, 301)

  taskAddConfirmBtn.addEventListener('click', todoConfirmDash);
})

plusTodoBoard.addEventListener('click', ()=>{
  todoBoard.style.opacity = '0';

  setTimeout(() => {
    todoBoard.style.display = 'none';

    setTimeout(()=>{
      todoAddBoard.style.display = 'flex';
      setTimeout(() => {
        todoAddBoard.style.opacity = '1';
      }, 5)
    }, 306)
  }, 301)

  taskAddConfirmBtn.addEventListener('click', todoConfirmBoard);
})

exitFsTodo.addEventListener('click', ()=>{
    todoBoard.style.opacity = '0%';
  setTimeout(()=>{
    todoBoard.style.display = 'none';
    dashboard.style.display = 'flex';
    dashboard.style.zIndex = '1';

    setTimeout(()=>{
      dashboard.style.opacity = '1';
    }, 306)
  }, 301);

  backCircleTodoAdd.removeEventListener('click', backToTodoBoardTodo);
  backCircleTodoAdd.addEventListener('click', backToDashTodo);
})

fsTodo.addEventListener('click', () =>{
  dashboard.style.opacity = '0';
  todoBoard.style.opacity = '0';

  setTimeout(() => {
    dashboard.style.display = 'none';
    dashboard.style.zIndex = '0';
    todoBoard.style.display = 'flex';

    setTimeout(() => {
      todoBoard.style.opacity = '1';
    }, 306)
  }, 301)

  backCircleTodoAdd.removeEventListener('click', backToDashTodo);
  backCircleTodoAdd.addEventListener('click', backToTodoBoardTodo);
})

backCircleTodoAdd.addEventListener('click', backToDashTodo);

function backToDashTodo(){
  todoAddBoard.style.opacity = '0%';

  setTimeout(()=>{
    todoAddBoard.style.display = 'none';
    dashboard.style.display = 'flex';
    dashboard.style.zIndex = '1';

    setTimeout(()=>{
      dashboard.style.opacity = '1';
    }, 306)
  }, 301)

  backCircleTodoAdd.removeEventListener('click', backToTodoBoardTodo);
  backCircleTodoAdd.addEventListener('click', backToDashTodo);
  taskAddConfirmBtn.removeEventListener('click', todoConfirmDash);
}

function backToTodoBoardTodo(){
  todoAddBoard.style.opacity = '0%';

  setTimeout(()=>{
    todoAddBoard.style.display = 'none';
    todoBoard.style.display = 'flex';
    todoBoard.style.zIndex = '1';

    setTimeout(()=>{
      todoBoard.style.opacity = '1';
    }, 306)
  }, 301)

  backCircleTodoAdd.removeEventListener('click', backToDashTodo);
  backCircleTodoAdd.addEventListener('click', backToTodoBoardTodo);
  taskAddConfirmBtn.removeEventListener('click', todoConfirmBoard);
}


// Todo Main
function todoConfirmDash(){
  if (checkInputs() === false){

  } else if (checkInputs() === true) {
    const dateTodo = new Date();

    const takeDate = taskDateAddInput.value.slice(8);
    const takeMonth2 = taskDateAddInput.value.slice(5, 7);
    const takeMonth = monthConverter(parseInt(takeMonth2));

    const addTask = {
      title: taskTitleAddInput.value,
      date: takeDate,
      month: takeMonth,
      key: dateTodo.getTime()
    }

    tasks.push(addTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateDomTodo();
    updateBoardTodo();


    taskAddConfirmBtn.removeEventListener('click', todoConfirmDash);
    backToDashTodo();
    taskTitleAddInput.value = '';
    taskDateAddInput.value = '';
  }
}

function todoConfirmBoard(){
  if (checkInputs() === false){

  } else if (checkInputs() === true) {
    const dateTodo = new Date();

    const takeDate = taskDateAddInput.value.slice(8);
    const takeMonth2 = taskDateAddInput.value.slice(5, 7);
    const takeMonth = monthConverter(parseInt(takeMonth2));

    const addTask = {
      title: taskTitleAddInput.value,
      date: takeDate,
      month: takeMonth,
      key: dateTodo.getTime()
    }

    tasks.push(addTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateDomTodo();
    updateBoardTodo();

    taskAddConfirmBtn.removeEventListener('click', todoConfirmBoard);
    backToTodoBoardTodo();
    taskTitleAddInput.value = '';
    taskDateAddInput.value = '';
  }
}

function checkInputs(){
  if (taskTitleAddInput.value === '' && taskDateAddInput.value === ''){
    notifText.innerText = 'Enter a Title and a Date!';
    notif.classList.add('show');

    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
    return false;
  } else if (taskTitleAddInput.value === ''){
    notifText.innerText = 'Enter a Task Title!';
    notif.classList.add('show');

    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
    return false;
  } else if (taskDateAddInput.value === ''){
    notifText.innerText = 'Enter a Task Date!';
    notif.classList.add('show');

    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
    return false;
  } else {
    return true;
  }
}

function updateDomTodo(){
  // Dashboard
  todoContentDash.innerHTML = '';

  for (let i = 0; i < tasks.length; i++){
    const taskConEl = document.createElement('div');
    taskConEl.classList.add('taskCon');
    taskConEl.classList.add('db');
    taskConEl.setAttribute('data-id', tasks[i].key);

    taskConEl.innerHTML = `
    <div class="taskCheckCon db" onClick="checkOffTask(${tasks[i].key})" >
    <svg class="taskCheckSvg db" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m9.707 19.121c-.187.188-.442.293-.707.293s-.52-.105-.707-.293l-5.646-5.647c-.586-.586-.586-1.536 0-2.121l.707-.707c.586-.586 1.535-.586 2.121 0l3.525 3.525 9.525-9.525c.586-.586 1.536-.586 2.121 0l.707.707c.586.586.586 1.536 0 2.121z"/></g></svg>
  </div>
  <div class="taskTitleCon db">
    <p class="db">${tasks[i].title}</p>
  </div>
  <div class="taskDateCon db">
    <p class="taskDate db" id="taskDate">${tasks[i].date}</p>
    <p class="taskMonth db" id="taskMonth">${tasks[i].month}</p>
  </div>
</div>
    `
    todoContentDash.appendChild(taskConEl);
  }
}

function updateBoardTodo(){
    // Board
    todoContentBoard.innerHTML = '';

    for (let i = 0; i < tasks.length; i++){
      const taskConEl = document.createElement('div');
      taskConEl.classList.add('taskCon');
      taskConEl.setAttribute('data-id', tasks[i].key);
  
      taskConEl.innerHTML = `
      <div class="taskCheckCon" onClick="checkOffTask(${tasks[i].key})" >
      <svg class="taskCheckSvg" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m9.707 19.121c-.187.188-.442.293-.707.293s-.52-.105-.707-.293l-5.646-5.647c-.586-.586-.586-1.536 0-2.121l.707-.707c.586-.586 1.535-.586 2.121 0l3.525 3.525 9.525-9.525c.586-.586 1.536-.586 2.121 0l.707.707c.586.586.586 1.536 0 2.121z"/></g></svg>
    </div>
    <div class="taskTitleCon">
      <p class="">${tasks[i].title}</p>
    </div>
    <div class="taskDateCon">
      <p class="taskDate" id="taskDate">${tasks[i].date}</p>
      <p class="taskMonth" id="taskMonth">${tasks[i].month}</p>
    </div>
  </div>
      `
      todoContentBoard.appendChild(taskConEl);
    }
}

function checkOffTask(keyGiven){
  for (let i = 0; i < tasks.length; i++){

    if (tasks[i].key === keyGiven){
      tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      updateDomTodo();
      updateBoardTodo();

      notifText.innerText = 'Nice!';
      notif.classList.add('show');
      setTimeout(()=>{
        notif.classList.remove('show');
      }, 1500);
    }
  }
}






// Note
plusNote.addEventListener('click', ()=>{
  noteMainBodyDash.innerText = '';
  noteMainHeaderDash.innerText = '';
  noteMainBodyBoard.innerText = '';
  noteMainHeaderBoard.innerText = '';
  noteMainBodyDash.contentEditable = true;
  noteMainHeaderDash.contentEditable = true;
  noteMainBodyBoard.contentEditable = true;
  noteMainHeaderBoard.contentEditable = true;
  const dateNote = new Date();
  const note = { title: 'untitled', body: '', key: dateNote.getTime()};
  notes.unshift(note);
  updateDomNoteDash();
  updateDomNoteBoard();
  localStorage.setItem('notes', JSON.stringify(notes));
})

plusNoteBoard.addEventListener('click', ()=>{
  noteMainBodyDash.innerText = '';
  noteMainHeaderDash.innerText = '';
  noteMainBodyBoard.innerText = '';
  noteMainHeaderBoard.innerText = '';
  noteMainBodyDash.contentEditable = true;
  noteMainHeaderDash.contentEditable = true;
  noteMainBodyBoard.contentEditable = true;
  noteMainHeaderBoard.contentEditable = true;
  const dateNoteBoard = new Date();
  const noteBoard = { title: 'untitled', body: '', key: dateNoteBoard.getTime()};
  notes.unshift(noteBoard);
  updateDomNoteDash();
  updateDomNoteBoard();
  localStorage.setItem('notes', JSON.stringify(notes));
})

exitFsNote.addEventListener('click', ()=>{
  noteMainBodyDash.innerText = '';
  noteMainHeaderDash.innerText = '';
  noteMainBodyBoard.innerText = '';
  noteMainHeaderBoard.innerText = '';
  updateDomNoteDash();
  updateDomNoteBoard();

    noteBoard.style.opacity = '0%';
  setTimeout(()=>{
    noteBoard.style.display = 'none';
    dashboard.style.display = 'flex';
    dashboard.style.zIndex = '1';

    setTimeout(()=>{
      dashboard.style.opacity = '1';
    }, 306)
  }, 301);
})

fsNote.addEventListener('click', () =>{
  noteMainBodyDash.innerText = '';
  noteMainHeaderDash.innerText = '';
  noteMainBodyBoard.innerText = '';
  noteMainHeaderBoard.innerText = '';
  updateDomNoteDash();
  updateDomNoteBoard();

  dashboard.style.opacity = '0';
  noteBoard.style.opacity = '0';

  setTimeout(() => {
    dashboard.style.display = 'none';
    dashboard.style.zIndex = '0';
    noteBoard.style.display = 'flex';

    setTimeout(() => {
      noteBoard.style.opacity = '1';
    }, 306)
  }, 301)
})



function saveNoteDash(){
  let noteEditedTitle = '';
  noteEditedTitle = noteMainHeaderDash.innerText;
  let noteEditedBody = '';
  noteEditedBody = noteMainBodyDash.innerText;

  notes[0].title = noteEditedTitle;
  notes[0].body = noteEditedBody;
  updateDomNoteDash();
  updateDomNoteBoard();

  notifText.innerText = 'Note Saved';
  notif.classList.add('show');
  setTimeout(()=>{
    notif.classList.remove('show');
  }, 1500);

  localStorage.setItem('notes', JSON.stringify(notes));
}

function saveNoteBoard(){
  let noteEditedTitleB = '';
  noteEditedTitleB = noteMainHeaderBoard.innerText;
  let noteEditedBodyB = '';
  noteEditedBodyB = noteMainBodyBoard.innerText;

  notes[0].title = noteEditedTitleB;
  notes[0].body = noteEditedBodyB;
  updateDomNoteDash();
  updateDomNoteBoard();

  notifText.innerText = 'Note Saved';
  notif.classList.add('show');
  setTimeout(()=>{
    notif.classList.remove('show');
  }, 1500);

  localStorage.setItem('notes', JSON.stringify(notes));
}

function checkLeftClick(e){
  const clickedEl = this;

  if (e.button === 0){
    becomeFocusedNote(clickedEl);
  }
}

function updateDomNoteDash(){
  noteListCon.innerHTML = '';

  if (notes.length === 0){
    noteMainBodyDash.innerText = '';
    noteMainHeaderDash.innerText = '';
    noteMainBodyBoard.innerText = '';
    noteMainHeaderBoard.innerText = '';
    noteMainBodyDash.contentEditable = false;
    noteMainHeaderDash.contentEditable = false;
    noteMainBodyBoard.contentEditable = false;
    noteMainHeaderBoard.contentEditable = false;
  }

  for (let i = 0; i < notes.length; i++){
    const noteEl = document.createElement('li');
    noteEl.classList.add('noteList');
    noteEl.classList.add('db');
    noteEl.setAttribute('data-key', notes[i].key);
    noteEl.addEventListener('click', checkLeftClick);
    noteEl.addEventListener('contextmenu', checkRightClick, false);

    if (notes[0]){
      noteEl.classList.add('focused');
      noteMainHeaderDash.innerText = notes[0].title;
      noteMainBodyDash.innerText = notes[0].body;
    }
    if (notes[i] !== notes[0]){
      noteEl.classList.remove('focused');
    }

    noteEl.innerText = notes[i].title;
    noteListCon.appendChild(noteEl);
  }

}

function updateDomNoteBoard(){
  noteListConBoard.innerHTML = '';

  if (notes.length === 0){
    noteMainBodyDash.innerText = '';
    noteMainHeaderDash.innerText = '';
    noteMainBodyBoard.innerText = '';
    noteMainHeaderBoard.innerText = '';
    noteMainBodyDash.contentEditable = false;
    noteMainHeaderDash.contentEditable = false;
    noteMainBodyBoard.contentEditable = false;
    noteMainHeaderBoard.contentEditable = false;
  }

  for (let i = 0; i < notes.length; i++){
    const noteElB = document.createElement('li');
    noteElB.classList.add('noteList');
    noteElB.setAttribute('data-key', notes[i].key);
    noteElB.addEventListener('click', checkLeftClick);
    noteElB.addEventListener('contextmenu', checkRightClick, false);

    if (notes[0]){
      noteElB.classList.add('focused');
      noteMainHeaderBoard.innerText = notes[0].title;
      noteMainBodyBoard.innerText = notes[0].body;
    }
    if (notes[i] !== notes[0]){
      noteElB.classList.remove('focused');
    }

    noteElB.innerText = notes[i].title;
    noteListConBoard.appendChild(noteElB);
  }
}

let clickedElRightNote = '';

function checkRightClick(e){
  e.preventDefault();
  clickedElRightNote = this;
  contextMenuNote.style.zIndex = '99';
  contextMenuNote.style.left = `${e.pageX + 10}px`;
  contextMenuNote.style.top = `${e.pageY}px`;
  contextMenuNote.style.display = 'block';
  return false;
}

window.addEventListener('click', getRidOfDeleteNote);

function getRidOfDeleteNote(e){
  if (e.target.id !== 'contextMenuNote'){
    contextMenuNote.style.display = 'none';
    contextMenuNote.style.zIndex = '0';
  } else if (e.target.id === 'contextMenuNote'){
    deleteNote(e);
    contextMenuNote.style.display = 'none';
    contextMenuNote.style.zIndex = '0';

    notifText.innerText = 'Note Deleted';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
  }
}

function deleteNote(){
  const key = parseInt(clickedElRightNote.getAttribute('data-key'));

  for (let i = 0; i < notes.length; i++){

    if (key === notes[i].key){
      const temp = notes[i];
      notes.splice(i, 1);
      updateDomNoteDash();
      updateDomNoteBoard();
      localStorage.setItem('notes', JSON.stringify(notes))
      break;
    }
  }
}

function becomeFocusedNote(clickedEl){

  const key = parseInt(clickedEl.getAttribute('data-key'));

  for (let i = 0; i < notes.length; i++){

    if (key === notes[i].key){
      const temp = notes[i];
      notes.splice(i, 1);
      notes.unshift(temp);
      updateDomNoteDash();
      updateDomNoteBoard();
      localStorage.setItem('notes', JSON.stringify(notes))
      break;
    }
  }
}






// Expense
// Navigation
plusLog.addEventListener('click', ()=>{
  dashboard.style.opacity = '0';

  setTimeout(() => {
    dashboard.style.display = 'none';
    dashboard.style.zIndex = '0';

    setTimeout(()=>{
      expenseAddBoard.style.display = 'flex';
      setTimeout(() => {
        expenseAddBoard.style.opacity = '1';
      }, 5)
    }, 306)
  }, 301)

  EATCButton.removeEventListener('click', expenseConfirmBoard);
  EAWCButton.removeEventListener('click', walletConfirmBoard);
  EATCButton.addEventListener('click', expenseConfirmDash);
  EAWCButton.addEventListener('click', walletConfirmDash);
})

plusLogBoard.addEventListener('click', ()=>{
  expenseBoard.style.opacity = '0';

  setTimeout(() => {
    expenseBoard.style.display = 'none';

    setTimeout(()=>{
      expenseAddBoard.style.display = 'flex';
      setTimeout(() => {
        expenseAddBoard.style.opacity = '1';
      }, 5)
    }, 306)
  }, 301)

  EATCButton.removeEventListener('click', expenseConfirmDash);
  EAWCButton.removeEventListener('click', walletConfirmDash);
  EATCButton.addEventListener('click', expenseConfirmBoard);
  EAWCButton.addEventListener('click', walletConfirmBoard);
})

exitFsLog.addEventListener('click', ()=>{
    expenseBoard.style.opacity = '0%';
  setTimeout(()=>{
    expenseBoard.style.display = 'none';
    dashboard.style.display = 'flex';
    dashboard.style.zIndex = '1';

    setTimeout(()=>{
      dashboard.style.opacity = '1';
    }, 306)
  }, 301);

  backCircleExpenseAdd.removeEventListener('click', backToBoardExpense);
  backCircleExpenseAdd.addEventListener('click', backToDashExpense);
})

fsLog.addEventListener('click', () =>{
  dashboard.style.opacity = '0';
  expenseBoard.style.opacity = '0';

  setTimeout(() => {
    dashboard.style.display = 'none';
    dashboard.style.zIndex = '0';
    expenseBoard.style.display = 'flex';

    setTimeout(() => {
      expenseBoard.style.opacity = '1';
    }, 306)
  }, 301)

  backCircleExpenseAdd.removeEventListener('click', backToDashExpense);
  backCircleExpenseAdd.addEventListener('click', backToBoardExpense);
})

backCircleExpenseAdd.addEventListener('click', backToDashExpense);
EATCButton.addEventListener('click', expenseConfirmDash);
EAWCButton.addEventListener('click', walletConfirmDash);


function backToDashExpense(){
  expenseAddBoard.style.opacity = '0%';

  setTimeout(()=>{
    expenseAddBoard.style.display = 'none';
    dashboard.style.display = 'flex';
    dashboard.style.zIndex = '1';

    setTimeout(()=>{
      dashboard.style.opacity = '1';
    }, 306)
  }, 301)

  backCircleExpenseAdd.removeEventListener('click', backToBoardExpense);
  backCircleExpenseAdd.addEventListener('click', backToDashExpense);
  EATCButton.removeEventListener('click', expenseConfirmBoard);
  EAWCButton.removeEventListener('click', walletConfirmBoard);
  EATCButton.addEventListener('click', expenseConfirmDash);
  EAWCButton.addEventListener('click', walletConfirmDash);
}

function backToBoardExpense(){
  expenseAddBoard.style.opacity = '0%';

  setTimeout(()=>{
    expenseAddBoard.style.display = 'none';
    expenseBoard.style.display = 'flex';
    expenseBoard.style.zIndex = '1';

    setTimeout(()=>{
      expenseBoard.style.opacity = '1';
    }, 306)
  }, 301)

  backCircleExpenseAdd.removeEventListener('click', backToDashExpense);
  backCircleExpenseAdd.addEventListener('click', backToBoardExpense);
  EATCButton.removeEventListener('click', expenseConfirmDash);
  EAWCButton.removeEventListener('click', walletConfirmDash);
  EATCButton.addEventListener('click', expenseConfirmBoard);
  EAWCButton.addEventListener('click', walletConfirmBoard);
}


function checkInputsWallet(){
  for (let i = 0; i < wallets.length; i++){
    if (wallets[i].walletName === EAWCName.value){
      notifText.innerText = 'Wallet Name Already Exists';
      notif.classList.add('show');
      setTimeout(()=>{
        notif.classList.remove('show');
      }, 1500);
    return false;
    }
  }

  if (EAWCName.value === '' && EAWCAmount.value === ''){
    notifText.innerText = 'Add a Name and an Amount';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
  return false;
  } else if (EAWCName.value === ''){
    notifText.innerText = 'Add a Wallet Name';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
  return false;
  } else if (EAWCAmount.value === ''){
    notifText.innerText = 'Add a Starting Amount';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
  return false;
  } else {
    return true;
  }
}

function walletConfirmDash(){

  if (checkInputsWallet() === false){

  } else if (checkInputsWallet() === true){
    const walletDDate = new Date();
    const newWallet = { walletName: EAWCName.value, walletStartingAmount: EAWCAmount.value, walletKey: walletDDate.getTime()};
    wallets.push(newWallet);
    localStorage.setItem('walletsLS', JSON.stringify(wallets));

    totalMoneyCalc(EAWCAmount.value);
    
    EAWCName.value = '';
    EAWCAmount.value = '';

    updateWalletOptions();
    updateDomWalletDash();
    updateDomWalletBoard();

    expenseAddBoard.style.opacity = '0%';
    setTimeout(()=>{
      expenseAddBoard.style.display = 'none';
      dashboard.style.display = 'flex';
      dashboard.style.zIndex = '1';
  
      setTimeout(()=>{
        dashboard.style.opacity = '1';
      }, 306)
    }, 301)
  }
}

function walletConfirmBoard(){
  if (checkInputsWallet() === false){

  } else if (checkInputsWallet() === true){
    const walletBDate = new Date();
    const newWallet = { walletName: EAWCName.value, walletStartingAmount: EAWCAmount.value, walletKey: walletBDate.getTime()};
    wallets.push(newWallet);
    localStorage.setItem('walletsLS', JSON.stringify(wallets));

    totalMoneyCalc(EAWCAmount.value);

    EAWCName.value = '';
    EAWCAmount.value = '';

    updateWalletOptions();
    updateDomWalletDash();
    updateDomWalletBoard();

    expenseAddBoard.style.opacity = '0%';
    setTimeout(()=>{
      expenseAddBoard.style.display = 'none';
      expenseBoard.style.display = 'flex';
      expenseBoard.style.zIndex = '1';
  
      setTimeout(()=>{
        expenseBoard.style.opacity = '1';
      }, 306)
    }, 301)
  }
}

function updateDomWalletDash(){
  walletConDashboard.innerHTML = '';

  let gottenWalletTotal = totalWalletAmountJS;

  if (gottenWalletTotal < 0){
    gottenWalletTotal = `-$${Math.abs(totalWalletAmountJS)}`;
  } else {
    gottenWalletTotal = `$${totalWalletAmountJS}`;
  }

  const newDashTotal = document.createElement('div');
  newDashTotal.classList.add('singleWalletCon');
  newDashTotal.classList.add('total');
  newDashTotal.classList.add('db');
  newDashTotal.innerHTML = `
    <h1 class="singleWalletName total db">Total</h1>
    <p class="singleWalletAmount total db" id="totalWalletAmountDb">${gottenWalletTotal}</p>
  `
  walletConDashboard.appendChild(newDashTotal);

  for (let i = 0; i < wallets.length; i++){
    const newDashWallet = document.createElement('div');
    newDashWallet.classList.add('singleWalletCon');
    newDashWallet.classList.add('db');
    newDashWallet.setAttribute('data-walletKeyDom', wallets[i].walletKey);
    newDashWallet.addEventListener('contextmenu', checkRightClickLog);
    
    let amountForWallet = parseInt(wallets[i].walletStartingAmount);

    if(amountForWallet < 0){
      amountForWallet = `-$${Math.abs(parseInt(wallets[i].walletStartingAmount))}`;
    } else {
      amountForWallet = `$${parseInt(wallets[i].walletStartingAmount)}`;
    }

    newDashWallet.innerHTML = `
      <h1 class="singleWalletName db">${wallets[i].walletName}</h1>
      <p class="singleWalletAmount db" data-walletKeyDom="${wallets[i].walletKey}">${amountForWallet}</p>
    `

    walletConDashboard.appendChild(newDashWallet);
  }
}

function updateDomWalletBoard(){
  walletConBoard.innerHTML = '';

  let gottenWalletTotalB = totalWalletAmountJS;

  if (gottenWalletTotalB < 0){
    gottenWalletTotalB = `-$${Math.abs(totalWalletAmountJS)}`;
  } else {
    gottenWalletTotalB = `$${totalWalletAmountJS}`;
  }

  const newDashTotalB = document.createElement('div');
  newDashTotalB.classList.add('singleWalletCon');
  newDashTotalB.classList.add('total');
  
  newDashTotalB.innerHTML = `
    <h1 class="singleWalletName total">Total</h1>
    <p class="singleWalletAmount total" id="totalWalletAmountDb">${gottenWalletTotalB}</p>
  `
  walletConBoard.appendChild(newDashTotalB);

  for (let i = 0; i < wallets.length; i++){
    const newDashWalletB = document.createElement('div');
    newDashWalletB.classList.add('singleWalletCon');
    newDashWalletB.setAttribute('data-walletKeyDom', wallets[i].walletKey);
    newDashWalletB.addEventListener('contextmenu', checkRightClickLog);
  
    let amountForWalletB = parseInt(wallets[i].walletStartingAmount);

    if(amountForWalletB < 0){
      amountForWalletB = `-$${Math.abs(parseInt(wallets[i].walletStartingAmount))}`;
    } else {
      amountForWalletB = `$${parseInt(wallets[i].walletStartingAmount)}`;
    }

    newDashWalletB.innerHTML = `
      <h1 class="singleWalletName db">${wallets[i].walletName}</h1>
      <p class="singleWalletAmount db" data-walletKeyDom="${wallets[i].walletKey}">${amountForWalletB}</p>
    `

    walletConBoard.appendChild(newDashWalletB);
  }
}

function updateWalletOptions(){

  EATCWallet.innerHTML = '';

  const totalWalletDomOption = document.createElement('option');
  totalWalletDomOption.value = 'Total';
  totalWalletDomOption.innerText = 'Total';
  EATCWallet.appendChild(totalWalletDomOption);

  for (let i = 0; i < wallets.length; i++){
    const newWalletDomOption = document.createElement('option');
    newWalletDomOption.value = `${wallets[i].walletName}`;
    newWalletDomOption.innerText = `${wallets[i].walletName}`;
    EATCWallet.appendChild(newWalletDomOption);
  }

  localStorage.setItem('walletsLS', JSON.stringify(wallets));
}

// Show Full Amount Function (using mouseover Add Event Listener on the specific wallet. Positioning will be like the delete Con)
window.addEventListener('mouseover', showMoneyAmount);

function showMoneyAmount(e){

  if (e.target.id === 'totalWalletAmountDb' || e.target.id === 'totalWalletAmountBoard'){
    showMoneyLog.style.left = `${e.pageX + 2}px`;
    showMoneyLog.style.top = `${e.pageY}px`;
    setTimeout(()=>{
      if (totalWalletAmountJS < 0){
        showMoney.innerText = '-$' + Math.abs(totalWalletAmountJS);
      } else {
        showMoney.innerText = '$' + totalWalletAmountJS;
      }      showMoneyLog.classList.add('show');

      setTimeout(()=>{
        showMoneyLog.style.opacity = '1';
      }, 301);
    }, 300);

  } else if(e.target.classList[0] === 'singleWalletAmount' && e.target.id !== 'totalWalletAmountDb' && e.target.id !== 'totalWalletAmountBoard' ){
    showMoneyLog.style.left = `${e.pageX + 2}px`;
    showMoneyLog.style.top = `${e.pageY}px`;

    let obtainedAmountWallet = 0;

    for (let i = 0; i < wallets.length; i++){
      if (parseInt(e.target.getAttribute('data-walletKeyDom')) === wallets[i].walletKey){
        obtainedAmountWallet = wallets[i].walletStartingAmount;
        break;
      }
    }

    setTimeout(()=>{
      if (obtainedAmountWallet < 0){
        showMoney.innerText = '-$' + Math.abs(obtainedAmountWallet);
      } else {
        showMoney.innerText = '$' + obtainedAmountWallet;
      }
      showMoneyLog.classList.add('show');

      setTimeout(()=>{
        showMoneyLog.style.opacity = '1';
      }, 301);
    }, 300);
  }


  else {
    setTimeout(()=>{
      showMoneyLog.style.opacity = '0';

      setTimeout(()=>{
        showMoneyLog.classList.remove('show');
      }, 301);
    }, 1);
  }
}


// Delete Wallet
let clickedElRightLog = '';

function checkRightClickLog(e){
  e.preventDefault();
  clickedElRightLog = this;
  contextMenuLog.style.zIndex = '99';
  contextMenuLog.style.left = `${e.pageX + 10}px`;
  contextMenuLog.style.top = `${e.pageY}px`;
  contextMenuLog.style.display = 'block';
  showMoneyLog.classList.remove('show');
  return false;
}

window.addEventListener('click', getRidOfDeleteLog);

function getRidOfDeleteLog(e){
  if (e.target.id !== 'contextMenuLog'){
    contextMenuLog.style.display = 'none';
    contextMenuLog.style.zIndex = '0';
  } else if (e.target.id === 'contextMenuLog'){
    deleteLog(e);
    contextMenuLog.style.display = 'none';
    contextMenuLog.style.zIndex = '0';

    notifText.innerText = 'Wallet Deleted';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
    localStorage.setItem('walletsLS', JSON.stringify(wallets));
    updateWalletOptions();
  }
}

function deleteLog(){
  const keyLog = parseInt(clickedElRightLog.getAttribute('data-walletKeyDom'));
  for (let i = 0; i < wallets.length; i++){

    if (keyLog === wallets[i].walletKey){
      totalMoneyCalc(-parseInt(wallets[i].walletStartingAmount));
      const temp = wallets[i];
      wallets.splice(i, 1);
      updateDomWalletDash();
      updateDomWalletBoard();
      localStorage.setItem('walletsLS', JSON.stringify(wallets));
      break;
    }
  }
}



// Transactions
function expenseConfirm(){
  const newTransDate = new Date();
  const newTransaction = { transTitle: EATCTitle.value, transAmount: Math.abs(EATCAmount.value), transWalletSelected: EATCWallet.value, transIOE: EATCIOE.value, transKey: newTransDate.getTime() };
  transactions.push(newTransaction);

  if (EATCIOE.value === 'income'){
    updateWalletAmountLM(parseInt(EATCAmount.value), EATCWallet.value);
    totalMoneyCalc(EATCAmount.value);
  } else if (EATCIOE.value === 'expense') {
    updateWalletAmountLM(-parseInt(EATCAmount.value), EATCWallet.value);
    totalMoneyCalc(-parseInt(EATCAmount.value));
  }

  updateDomExpenseBoard();
  updateDomWalletBoard();
  updateDomWalletDash();
  localStorage.setItem('transactionsLS', JSON.stringify(transactions));
  localStorage.setItem('walletsLS', JSON.stringify(wallets));

  EATCTitle.value = '';
  EATCAmount.value = '';
}

function checkInputsExpense(){
  if (EATCTitle.value === ''){
    notifText.innerText = 'Add a Transaction Name';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
    return false;
  } else {
    return true;
  }
}

function expenseConfirmDash(){
  if (checkInputsExpense() === true){
    expenseConfirm();
    expenseAddBoard.style.opacity = '0%';

    setTimeout(()=>{
      expenseAddBoard.style.display = 'none';
      dashboard.style.display = 'flex';
      dashboard.style.zIndex = '1';
  
      setTimeout(()=>{
        dashboard.style.opacity = '1';
      }, 306)
    }, 301)
  }
}


function expenseConfirmBoard(){
  if (checkInputsExpense() === true){
    expenseConfirm();
    expenseAddBoard.style.opacity = '0%';

    setTimeout(()=>{
      expenseAddBoard.style.display = 'none';
      expenseBoard.style.display = 'flex';
      expenseBoard.style.zIndex = '1';

      setTimeout(()=>{
        expenseBoard.style.opacity = '1';
      }, 306)
    }, 301)
  }
}


function updateDomExpenseBoard(){
  transLogMainConBoard.innerHTML = '';

  for (let i = 0; i < transactions.length; i++){
    const logInDom = document.createElement('div');
    logInDom.classList.add('singleLogCon');
    logInDom.innerHTML = `
    <div class="deleteLogCon" onClick="deleteTransaction(${transactions[i].transKey})" data-transKey="${transactions[i].transKey}">
      <p>X</p>
    </div>
    <p class="singleLogTitle">${transactions[i].transTitle}</p>
    <div class="singleLogWalletTitle">${transactions[i].transWalletSelected}</div>
    <div class="singleLogIOE ${transactions[i].transIOE}">$${transactions[i].transAmount}</div>
    `
    transLogMainConBoard.appendChild(logInDom);
  }

}

function deleteTransaction(e){
  const obtainedTransKey = e;
  let isItGoneCheck = false;
  
  for (let i = 0; i < transactions.length; i++){

    if (obtainedTransKey === transactions[i].transKey){
      for (let j = 0; j < wallets.length; j++){
        if (wallets[j].walletName === transactions[i].transWalletSelected){
          if (transactions[i].transIOE === 'income'){
            updateWalletAmountLD(transactions[i].transWalletSelected, -transactions[i].transAmount);
            totalMoneyCalc(-transactions[i].transAmount);
          } else if (transactions[i].transIOE === 'expense') {
            updateWalletAmountLD(transactions[i].transWalletSelected, transactions[i].transAmount);
            totalMoneyCalc(transactions[i].transAmount);
          }
    
          isItGoneCheck = true;
          const temp = transactions[i];
          transactions.splice(i, 1);
          updateDomWalletDash();
          updateDomWalletBoard();
          updateDomExpenseBoard();
          localStorage.setItem('transactionsLS', JSON.stringify(transactions));
          localStorage.setItem('walletsLS', JSON.stringify(wallets));
          break;
        }
      }

      if (transactions[i].transIOE === 'income'){
        totalMoneyCalc(-transactions[i].transAmount);
      } else if (transactions[i].transIOE === 'expense'){
        totalMoneyCalc(transactions[i].transAmount);
      }

      if (isItGoneCheck === false){
        const temp = transactions[i];
        transactions.splice(i, 1);
        updateDomWalletDash();
        updateDomWalletBoard();
        updateDomExpenseBoard();
        localStorage.setItem('transactionsLS', JSON.stringify(transactions));
        localStorage.setItem('walletsLS', JSON.stringify(wallets));
        break;
      } else if (isItGoneCheck === true) {
        isItGoneCheck = false;
        break;
      }
    }
    notifText.innerText = 'Transaction Cancelled';
    notif.classList.add('show');
    setTimeout(()=>{
      notif.classList.remove('show');
    }, 1500);
  }
}



// Number Tingz

// Total $
function totalMoneyCalc(amount){
  totalWalletAmountJS += parseInt(amount);
  localStorage.setItem('totalWalletAmountJSLS', JSON.stringify(totalWalletAmountJS));
}


// Update Wallet Amount when Log is Made
function updateWalletAmountLM(amount, wallet){

  for (let i = 0; i < wallets.length; i++){
    if (wallets[i].walletName === wallet){
      const moneyToChange = parseInt(wallets[i].walletStartingAmount) + amount;
      wallets[i].walletStartingAmount = JSON.stringify(moneyToChange);
      break;
    }
  }
}


// Update Wallet Amount when Log is Deleted
function updateWalletAmountLD(wallet, amount){

  for (let i = 0; i < wallets.length; i++){
    if (wallets[i].walletName === wallet){
      const moneyToChangeA = parseInt(wallets[i].walletStartingAmount) + amount;
      wallets[i].walletStartingAmount = JSON.stringify(moneyToChangeA);
      break;
    }
  }
}




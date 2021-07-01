/*
function nyTabellRad() {
  const nyRad = document.createElement('tr');
  const td1 = nyTabellTd();
  const td2 = nyTabellTd();
  const td3 = nyTabellTd();
  nyRad.appendChild(td1);
  nyRad.appendChild(td2);
  nyRad.appendChild(td3);
  return nyRad;
}

function nyTabellTd() {
  const td = document.createElement('td');
  const input = document.createElement('input');
  td.appendChild(input);
  return td;
}

window.onload = function () {
  let utdanningRader = [
    { år: '', sted: '', fag: '' },
    { år: '', sted: '', fag: '' },
    { år: '', sted: '', fag: '' }
  ];

  foreach(row in utdanningRader) {
    const utdanningRader = document.getElementById('utdanningRader');
    utdanningRader.appendChild(nyTabellRad());
    
   
  }

  */


let name1 = document.getElementById('name1');
let name2 = document.getElementById('name2');
name1.addEventListener('input', function () {
  name2.value = name1.value;
});



let adress1 = document.getElementById('adress1');
let adress2 = document.getElementById('adress2');
adress1.addEventListener('input', function () {
  adress2.value = adress1.value;
});

let email1 = document.getElementById('email1');
let email2 = document.getElementById('email2');
email1.addEventListener('input', function () {
  email2.value = email1.value;
});


let cellPhone1 = document.getElementById('cellPhone1');
let cellPhone2 = document.getElementById('cellPhone2');
cellPhone1.addEventListener('input', function () {
  cellPhone2.value = cellPhone1.value;
});

let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');
date1.addEventListener('input', function () {
  date2.value = date1.value;
});

let nøkkelkompetanse1 = document.getElementById('nøkkelkompetanse1');
let nøkkelkompetanse2 = document.getElementById('nøkkelkompetanse2');
nøkkelkompetanse1.addEventListener('input', function () {
  nøkkelkompetanse2.value = nøkkelkompetanse1.value;
});

let year1left = document.getElementById('year1-left');
let year1right = document.getElementById('year1-right');
year1left.addEventListener('input', function () {
  year1right.value = year1left.value;
});

let year2left = document.getElementById('year2-left');
let year2right = document.getElementById('year2-right');
year2left.addEventListener('input', function () {
  year2right.value = year2left.value;
});

let year3left = document.getElementById('year3-left');
let year3right = document.getElementById('year3-right');
year3left.addEventListener('input', function () {
  year3right.value = year3left.value;
});

let year4left = document.getElementById('year4-left');
let year4right = document.getElementById('year4-right');
year4left.addEventListener('input', function () {
  year4right.value = year4left.value;
});

let year5left = document.getElementById('year5-left');
let year5right = document.getElementById('year5-right');
year5left.addEventListener('input', function () {
  year5right.value = year5left.value;
});

let year6left = document.getElementById('year6-left');
let year6right = document.getElementById('year6-right');
year6left.addEventListener('input', function () {
  year6right.value = year6left.value;
});

let year7left = document.getElementById('year7-left');
let year7right = document.getElementById('year7-right');
year7left.addEventListener('input', function () {
  year7right.value = year7left.value;
});

let year8left = document.getElementById('year8-left');
let year8right = document.getElementById('year8-right');
year8left.addEventListener('input', function () {
  year8right.value = year8left.value;
});

let year9left = document.getElementById('year9-left');
let year9right = document.getElementById('year9-right');
year9left.addEventListener('input', function () {
  year9right.value = year9left.value;
});

let place1left = document.getElementById('place1-left');
let place1right = document.getElementById('place1-right');
place1left.addEventListener('input', function () {
  place1right.value = place1left.value;
});

let place2left = document.getElementById('place2-left');
let place2right = document.getElementById('place2-right');
place2left.addEventListener('input', function () {
  place2right.value = place2left.value;
});

let place3left = document.getElementById('place3-left');
let place3right = document.getElementById('place3-right');
place3left.addEventListener('input', function () {
  place3right.value = place3left.value;
});

let place4left = document.getElementById('place4-left');
let place4right = document.getElementById('place4-right');
place4left.addEventListener('input', function () {
  place4right.value = place4left.value;
});

let place5left = document.getElementById('place5-left');
let place5right = document.getElementById('place5-right');
place5left.addEventListener('input', function () {
  place5right.value = place5left.value;
});

let place6left = document.getElementById('place6-left');
let place6right = document.getElementById('place6-right');
place6left.addEventListener('input', function () {
  place6right.value = place6left.value;
});

let place7left = document.getElementById('place7-left');
let place7right = document.getElementById('place7-right');
place7left.addEventListener('input', function () {
  place7right.value = place7left.value;
});

let place8left = document.getElementById('place8-left');
let place8right = document.getElementById('place8-right');
place8left.addEventListener('input', function () {
  place8right.value = place8left.value;
});

let place9left = document.getElementById('place9-left');
let place9right = document.getElementById('place9-right');
place9left.addEventListener('input', function () {
  place9right.value = place9left.value;
});

let subject1left = document.getElementById('subject1-left');
let subject1right = document.getElementById('subject1-right');
subject1left.addEventListener('input', function () {
  subject1right.value = subject1left.value;
});

let subject2left = document.getElementById('subject2-left');
let subject2right = document.getElementById('subject2-right');
subject2left.addEventListener('input', function () {
  subject2right.value = subject2left.value;
});

let subject3left = document.getElementById('subject3-left');
let subject3right = document.getElementById('subject3-right');
subject3left.addEventListener('input', function () {
  subject3right.value = subject3left.value;
});

let subject4left = document.getElementById('subject4-left');
let subject4right = document.getElementById('subject4-right');
subject4left.addEventListener('input', function () {
  subject4right.value = subject4left.value;
});

let subject5left = document.getElementById('subject5-left');
let subject5right = document.getElementById('subject5-right');
subject5left.addEventListener('input', function () {
  subject5right.value = subject5left.value;
});


let subject6left = document.getElementById('subject6-left');
let subject6right = document.getElementById('subject6-right');
subject6left.addEventListener('input', function () {
  subject6right.value = subject6left.value;
});

let subject7left = document.getElementById('subject7-left');
let subject7right = document.getElementById('subject7-right');
subject7left.addEventListener('input', function () {
  subject7right.value = subject7left.value;
});

let subject8left = document.getElementById('subject8-left');
let subject8right = document.getElementById('subject8-right');
subject8left.addEventListener('input', function () {
  subject8right.value = subject8left.value;
});

let subject9left = document.getElementById('subject9-left');
let subject9right = document.getElementById('subject9-right');
subject9left.addEventListener('input', function () {
  subject9right.value = subject9left.value;
});









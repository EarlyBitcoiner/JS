function edit(ref, match, replacer) {
  let text = ref.textContent;
  let edited = text.replaceAll(match, replacer);
  ref.textContent = edited;
}

//edit(document.getElementsByTagName("H1")[0], "crazy", "smart");

function collectList() {
    
  let list = document.querySelectorAll('#items li');

  let textArea = document.querySelector('#result');

  for (let item of list) {
    textArea.value += item.textContent + '\n';
  }
}

function sum() {
  
  let x = document.querySelector('#x');
  let y = document.querySelector('#y');
  let sum = document.querySelector('#z');

  if (x.value === '' || y.value === '') {
    sum.value = 'Error accured!';
    return;
  }

  sum.value = Number(x.value) + Number(y.value);
}

function show() {
  
  let a = document.querySelector('#ahref')
  let p = document.querySelector('#hidden');

  a.style.display = "none";
  p.style.display = "inline";
};

function colorize() {
  
  let rows = document.querySelectorAll('table tr');
  let i = 1;

  for (let row of rows){
    
    if (i % 2 === 0) {
      row.style.background = "teal";
    }
    i++;
  }

}

function tableSum() {
  
  let sum = 0;
  let rows = document.querySelectorAll('#t1 tr');

  for (const row of rows) {
    
    let cost = row.querySelector('td:nth-child(2)');

    if (cost !== null) {
      sum += Number(cost.textContent);
    }
  }

  document.querySelector("#tableSum").textContent = sum;
}
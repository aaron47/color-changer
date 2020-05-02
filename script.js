let allBtns = document.getElementsByTagName('button');

let copyAllBtns = [];
for (let i = 0; i < allBtns.length; i++) {
  copyAllBtns.push(allBtns[i].classList[1]);
}

function btnColorChange(color) {
  if (color.value === 'red') {
    btnsRed();
  } else if (color.value === 'green') {
    btnsGreen();
  } else if (color.value === 'reset') {
    btnColorReset();
  } else if (color.value === 'random') {
    randomColors();
  }
}

function btnsRed() {
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].classList.remove(allBtns[i].classList[1]);
    allBtns[i].classList.add('btn-danger');
  }
}

function btnsGreen() {
  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].classList.remove(allBtns[i].classList[1]);
    allBtns[i].classList.add('btn-success');
  }
}

function btnColorReset () {
	for (let i = 0; i < allBtns.length; i++) {
		allBtns[i].classList.remove(allBtns[i].classList[1]);
		allBtns[i].classList.add(copyAllBtns[i]);
	}
}

function randomColors() {
	let choices = ['btn-primary', 'btn-success', 'btn-primary', 'btn-danger'];

	for (let i = 0; i < allBtns.length; i++) {
		let randomChoice = Math.floor(Math.random() * 4);
		allBtns[i].classList.remove(allBtns[i].classList[1]);
		allBtns[i].classList.add(choices[randomChoice]);
	}
}
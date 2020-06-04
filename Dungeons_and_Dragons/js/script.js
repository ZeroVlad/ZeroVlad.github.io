const dice4 = document.querySelector(".button-d4");
const dice6 = document.querySelector(".button-d6");
const dice8 = document.querySelector(".button-d8");
const dice10 = document.querySelector(".button-d10");
const dice12 = document.querySelector(".button-d12");
const dice20 = document.querySelector(".button-d20");
const dice100 = document.querySelector(".button-d100");
const resultRoll = document.querySelector(".result-block");

dice4.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*4)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="d4 result">' + valueRoll + '</div>');
}

dice6.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*6)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="d6 result">' + valueRoll + '</div>');
}

dice8.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*8)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="d8 result">' + valueRoll + '</div>');
}

dice10.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*10)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="d10 result">' + valueRoll + '</div>');
}

dice12.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*12)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="d12 result">' + valueRoll + '</div>');
}

dice20.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*20)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="d20 result">' + valueRoll + '</div>');
}

dice100.onclick = () => {
	let valueRoll;
	valueRoll = Math.floor(Math.random()*100)+1;
	console.log(valueRoll);
	resultRoll.insertAdjacentHTML('beforeend', '<div class="dice result">' + valueRoll + '</div>');
}
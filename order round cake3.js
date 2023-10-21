function multiply3(){
	a3 = Number(document.getElementById('QTY3').value);
	b3 = Number(document.getElementById('PRICE3').value);
	a = Number(document.getElementById('QTY2').value);
	b = Number(document.getElementById('PRICE2').value);
	a2 = Number(document.getElementById('QTY').value);
	b2 = Number(document.getElementById('PRICE').value);
	a4 = Number(document.getElementById('QTY4').value);
	b4 = Number(document.getElementById('PRICE4').value);
	a5 = Number(document.getElementById('QTY5').value);
	b5 = Number(document.getElementById('PRICE5').value);
	a6 = Number(document.getElementById('QTY6').value);
	b6 = Number(document.getElementById('PRICE6').value);
	d = a3 * b3;
	e = a * b + a2 * b2 + a3 * b3 + a4 * b4 + a5 * b5 + a6 * b6;
	document.getElementById('TOTAL3').value=d;
	document.getElementById('TOTAL ALL').value=e;
}
function pic3(){
	let input = document.getElementById('img3');
	let get = document.getElementById('QTY3');
	input.checked = true;
	get.disabled = false;
	a = Number(document.getElementById('img2').value);
	b = Number(document.getElementById('PRICE2').value);
	b2 = Number(document.getElementById('TOTAL').value);
	b3 = Number(document.getElementById('TOTAL2').value);
	b4 = Number(document.getElementById('TOTAL4').value);
	b5 = Number(document.getElementById('TOTAL5').value);
	b6 = Number(document.getElementById('TOTAL6').value);
	d = a * b;
	e = a * b + b2 + b3 + b4 + b5 + b6;
	document.getElementById('TOTAL3').value=d;
	document.getElementById('TOTAL ALL').value=e;
}
function uncheck3(){
	let input = document.getElementById('img3');
	let get = document.getElementById('QTY3');
	input.checked = false;
	get.disabled = true;
	a = Number(document.getElementById('PRICE3').value);
	b = Number(document.getElementById('QTY3').value);
	a2 = Number(document.getElementById('PRICE').value);
	b2 = Number(document.getElementById('QTY').value);
	a3 = Number(document.getElementById('PRICE2').value);
	b3 = Number(document.getElementById('QTY2').value);
	a4 = Number(document.getElementById('PRICE4').value);
	b4 = Number(document.getElementById('QTY4').value);
	a5 = Number(document.getElementById('PRICE5').value);
	b5 = Number(document.getElementById('QTY5').value);
	a6 = Number(document.getElementById('PRICE6').value);
	b6 = Number(document.getElementById('QTY6').value);
	a = 0;
	e = a * b + a2 * b2 + a3 * b3 + a4 * b4 + a5 * b5 + a6 * b6;
	document.getElementById('TOTAL3').value = a;
	document.getElementById('QTY3').value = a;
	document.getElementById('TOTAL ALL').value = e;
}
document.getElementById('img3').onchange = function() {
	document.getElementById('QTY3').disabled = !this.checked;
	a = 1;
	document.getElementById('QTY3').value = a;
}
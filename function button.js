function button(e){
	document.getElementById('QTY').required = true;
	document.getElementById('QTY2').required = true;
	document.getElementById('QTY3').required = true;
	document.getElementById('QTY4').required = true;
	document.getElementById('QTY5').required = true;
    document.getElementById('QTY6').required = true;
	window.alert('P' + document.getElementById('TOTAL ALL').value + '.00' + ' is your total amount!!')
	if(!confirm('Are you sure for this price?')) {
        e.preventDefault();
    }
}
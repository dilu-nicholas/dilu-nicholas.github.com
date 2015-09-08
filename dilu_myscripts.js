// JavaScript Document

var keynum = 0;

inverse.on("click", function () {
	var val = textBox.val(),
	text = parseFloat(val),
	recip = eval(1 / text);
	textBox.val(recip);
	
});

function f_x_sqr() {
	with(document.calc) {
		x.value = x.value * x.value;
	}
	keynum = 0;
}

function c(val) {
 document.getElementById("d").value=val;
}

function v(val) {
	document.getElementById("d").value+=val;
}

function e() { 
    try { 
        c(eval(document.getElementById("d").value)) 
    } 
    catch(e) {
        c('Error')
		} 
}

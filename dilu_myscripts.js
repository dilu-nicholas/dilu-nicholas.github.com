// JavaScript Document

var keynum = 0;

function f_inv_x() {
	with (document.calc) {
		if(x.value != 0) {
			x.value = 1 / x.value;
			keynum = 0;
		}
		else {
			alert("Division by zero.");
		}
	}
}

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
